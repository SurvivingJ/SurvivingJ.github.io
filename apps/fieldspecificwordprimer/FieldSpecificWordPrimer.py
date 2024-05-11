import csv
import requests
import json
from bs4 import BeautifulSoup
import re

eng_freq = []

with open('unigram_freq.csv', 'r') as file:
    csv_reader = csv.reader(file)
    i = 0
    for row in csv_reader:
        eng_freq.append(row[0])
        i += 1
        if i > 1500:
            break

language_code = 'en'
search_query = input("What would you like to learn about? ")
num_words = int(input("How many words would you like to learn (Type an integer)? "))
number_of_results = 1
headers = {
  'Authorization': '''eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3ZGRiZTVhYzIxYjNlNDkyMWVjYzA2NTE4OTg2MDkxYyIsImp0aSI6IjgyZjNiYjU0ZDg2MGQ1MmJiZWQyY2YzNWJjODllZjAwYjNiOGVkNjg3NjZmMDUxMzczNDA0ZDEyZWU3ZmIyNzA1Y2VjNmNkNjAxZjAwMGZmIiwiaWF0IjoxNzE1NDM2MDE0LjQ3MDg5LCJuYmYiOjE3MTU0MzYwMTQuNDcwODk1LCJleHAiOjMzMjcyMzQ0ODE0LjQ2ODMsInN1YiI6Ijc1NjI5MDgxIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.UxleGfSoQ7gKZqdoawtjtRrwIkdc5A8qPuQJXV0Q4rbH0T4aybaq1IZePK8WsHhmzKqKAs5Z51XNHTSJvVh73DFovhwgdCBk6zcE6EYka96Gvx1GmFQhnVccZCnGFx4AT9sMDI1IkCsgpIKiElCG0LM3DK9vZ4pp-uKmZrHSMUSowW19AiybjgI0PFCgNCzCDPcu45c7W5BKlT1-nVuJZKoXkxUi_0O6f0yIoYKxhrPJXfWqFOMXBPcFs4EkkjQyxltQ1duQzhlC5Ji1KxN5oleYnWiA3vMSl_tOQkrv7LG3B-_KVscuj7nX_GMF5yFzCO65ywiKCSX731c10cJA2TKhRLiLT6NpOada358ZVDcpXQtt2v5-3oYeV2w4MAVwgb_iNKnNmda7EyQUSbXSZ7RrUQ1fR5haHTFoKVjgem3Lc4lGtrKE2PT8DJUN4EBla5o4sp_RodZopbpglNHhqMOH_nnZsqFqslL1hTR5hTqMuhEpk7zMZOHNac6wQowV9JMMhP0ma5vE70zKtAtvN0wd-cMUALmnrwxtpqaVn2qlFhvoqJ6kpymN8F4qlZcdLXlvyPciYPt53dPR0SbZMwTuMdt2yscYmFk38zTZiEGvX9k9rFMEctOODZIBPqb1pzE1het5xlYx1aoVw32lM1iehePh1M63bC5ULl0Wka0''',
  'User-Agent': 'FieldSpecificWordPrimer'
}

base_url = 'https://api.wikimedia.org/core/v1/wikipedia/'
endpoint = '/search/page'
url = base_url + language_code + endpoint
parameters = {'q': search_query, 'limit': number_of_results}
response = requests.get(url, headers=headers, params=parameters)

response = json.loads(response.text)

for page in response['pages']:
    print(page)
    display_title = page['title']
    article_url = 'https://' + language_code + '.wikipedia.org/wiki/' + page['key']
    try:
        article_description = page['description']
    except:
        article_description = 'a Wikipedia article'

    url = f"https://en.wikipedia.org/w/api.php?action=parse&pageid={page['id']}&format=json"
    
    print(url)
    response = requests.get(url, headers=headers)
    print(response)
    soup = BeautifulSoup(response.text, 'html.parser')
    paragraphs = soup.find_all('p')
    text = []
    for p in paragraphs:
        text.append(p.text)
    content = ''.join(text)
    split_content = content.split()
    word_freq = {}
    for word in split_content:
        new_string = re.sub(r'(\[\d+\])|\\n|\\|\d|[,.\'":;!?()\-!@#$%^&*]', ' ', word)
        word_arr = new_string.split()

        for w in word_arr:
            if w in word_freq:
                word_freq[w] += 1
            else:
                word_freq[w] = 1

    filtered_freq = {word: freq for word, freq in word_freq.items() if word.lower() not in eng_freq}
    sorted_freq = sorted(filtered_freq.items(), key=lambda x: x[1], reverse=True)
    most_frequent_words = sorted_freq[:num_words]

    with open('words.csv', "a", encoding='utf-8') as f:
        for word in most_frequent_words:
            f.write(str(word[0]))
            f.write('\n')    
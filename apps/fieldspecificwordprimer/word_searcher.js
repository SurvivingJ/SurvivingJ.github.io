// Assuming eng_freq is already initialized
let i = 0;

// Fetch CSV data
fetch('/unigram_freq.csv')
    .then(response => response.text())
    .then(data => {
        const csvData = data.split('\n');
        for (const row of csvData) {
            eng_freq.push(row.split(',')[0]);
            i++;
            if (i > 1500) break;
        }
    })
    .catch(error => console.error('Error fetching CSV data:', error));

document.getElementById('submit-button').addEventListener('click', () => {
    const topic = document.getElementById('ans-input').value;
    const numWords = parseInt(document.getElementById('upper-bound-input').value, 10);
    const numberOfResults = 1;

    // Fetch search results from Wikipedia API
    fetch(`https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=${topic}&limit=${numberOfResults}`, {
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3ZGRiZTVhYzIxYjNlNDkyMWVjYzA2NTE4OTg2MDkxYyIsImp0aSI6IjgyZjNiYjU0ZDg2MGQ1MmJiZWQyY2YzNWJjODllZjAwYjNiOGVkNjg3NjZmMDUxMzczNDA0ZDEyZWU3ZmIyNzA1Y2VjNmNkNjAxZjAwMGZmIiwiaWF0IjoxNzE1NDM2MDE0LjQ3MDg5LCJuYmYiOjE3MTU0MzYwMTQuNDcwODk1LCJleHAiOjMzMjcyMzQ0ODE0LjQ2ODMsInN1YiI6Ijc1NjI5MDgxIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.UxleGfSoQ7gKZqdoawtjtRrwIkdc5A8qPuQJXV0Q4rbH0T4aybaq1IZePK8WsHhmzKqKAs5Z51XNHTSJvVh73DFovhwgdCBk6zcE6EYka96Gvx1GmFQhnVccZCnGFx4AT9sMDI1IkCsgpIKiElCG0LM3DK9vZ4pp-uKmZrHSMUSowW19AiybjgI0PFCgNCzCDPcu45c7W5BKlT1-nVuJZKoXkxUi_0O6f0yIoYKxhrPJXfWqFOMXBPcFs4EkkjQyxltQ1duQzhlC5Ji1KxN5oleYnWiA3vMSl_tOQkrv7LG3B-_KVscuj7nX_GMF5yFzCO65ywiKCSX731c10cJA2TKhRLiLT6NpOada358ZVDcpXQtt2v5-3oYeV2w4MAVwgb_iNKnNmda7EyQUSbXSZ7RrUQ1fR5haHTFoKVjgem3Lc4lGtrKE2PT8DJUN4EBla5o4sp_RodZopbpglNHhqMOH_nnZsqFqslL1hTR5hTqMuhEpk7zMZOHNac6wQowV9JMMhP0ma5vE70zKtAtvN0wd-cMUALmnrwxtpqaVn2qlFhvoqJ6kpymN8F4qlZcdLXlvyPciYPt53dPR0SbZMwTuMdt2yscYmFk38zTZiEGvX9k9rFMEctOODZIBPqb1pzE1het5xlYx1aoVw32lM1iehePh1M63bC5ULl0Wka0',
            'User-Agent': 'FieldSpecificWordPrimer'
        }
    })
    .then(response => response.json())
    .then(data => {
        for (const page of data.pages) {
            const apiUrl = `https://en.wikipedia.org/w/api.php?action=parse&pageid=${page.id}&format=json`;

            fetch(apiUrl, {
                headers: {
                    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3ZGRiZTVhYzIxYjNlNDkyMWVjYzA2NTE4OTg2MDkxYyIsImp0aSI6IjgyZjNiYjU0ZDg2MGQ1MmJiZWQyY2YzNWJjODllZjAwYjNiOGVkNjg3NjZmMDUxMzczNDA0ZDEyZWU3ZmIyNzA1Y2VjNmNkNjAxZjAwMGZmIiwiaWF0IjoxNzE1NDM2MDE0LjQ3MDg5LCJuYmYiOjE3MTU0MzYwMTQuNDcwODk1LCJleHAiOjMzMjcyMzQ0ODE0LjQ2ODMsInN1YiI6Ijc1NjI5MDgxIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.UxleGfSoQ7gKZqdoawtjtRrwIkdc5A8qPuQJXV0Q4rbH0T4aybaq1IZePK8WsHhmzKqKAs5Z51XNHTSJvVh73DFovhwgdCBk6zcE6EYka96Gvx1GmFQhnVccZCnGFx4AT9sMDI1IkCsgpIKiElCG0LM3DK9vZ4pp-uKmZrHSMUSowW19AiybjgI0PFCgNCzCDPcu45c7W5BKlT1-nVuJZKoXkxUi_0O6f0yIoYKxhrPJXfWqFOMXBPcFs4EkkjQyxltQ1duQzhlC5Ji1KxN5oleYnWiA3vMSl_tOQkrv7LG3B-_KVscuj7nX_GMF5yFzCO65ywiKCSX731c10cJA2TKhRLiLT6NpOada358ZVDcpXQtt2v5-3oYeV2w4MAVwgb_iNKnNmda7EyQUSbXSZ7RrUQ1fR5haHTFoKVjgem3Lc4lGtrKE2PT8DJUN4EBla5o4sp_RodZopbpglNHhqMOH_nnZsqFqslL1hTR5hTqMuhEpk7zMZOHNac6wQowV9JMMhP0ma5vE70zKtAtvN0wd-cMUALmnrwxtpqaVn2qlFhvoqJ6kpymN8F4qlZcdLXlvyPciYPt53dPR0SbZMwTuMdt2yscYmFk38zTZiEGvX9k9rFMEctOODZIBPqb1pzE1het5xlYx1aoVw32lM1iehePh1M63bC5ULl0Wka0',
                    'User-Agent': 'FieldSpecificWordPrimer'
                }
            })
            .then(response => response.json())
            .then(data => {
                const paragraphs = data.parse.text['*'];
                const text = new DOMParser().parseFromString(paragraphs, 'text/html').body.textContent;
                const splitContent = text.split(/\s+/);
                const wordFreq = {};
                for (const word of splitContent) {
                    const newString = word.replace(/(\[\d+\])|\\n|\\|\d|[,.\'":;!?()\-!@#$%^&*]/g, ' ');
                    const wordArr = newString.split(/\s+/);

                    for (const w of wordArr) {
                        const lowerCaseWord = w.toLowerCase();
                        if (!engFreq.includes(lowerCaseWord)) {
                            wordFreq[lowerCaseWord] = (wordFreq[lowerCaseWord] || 0) + 1;
                        }
                    }
                }

                const sortedFreq = Object.entries(wordFreq).sort((a, b) => b[1] - a[1]);
                const mostFrequentWords = sortedFreq.slice(0, numWords);

                let wordsCsv = '';
                for (const word of mostFrequentWords) {
                    wordsCsv += `${word[0]}\n`;
                }

                // Trigger file download
                const blob = new Blob([wordsCsv], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'words.csv';
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error fetching article data:', error));
        }
    })
    .catch(error => console.error('Error fetching search results:', error));
});

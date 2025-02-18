// Step 1: Initialize an empty array for the prompts
let prompts = [];

// Step 2: Fetch the index of prompt files
fetch('prompts/index.json')
  .then(response => response.json())
  .then(files => {
    // Step 3: Load each file from the index and push its contents to the prompts array
    let filesLoaded = 0;
    files.forEach(file => {
      fetch(`prompts/${file}`)
        .then(response => response.json()) // Assuming each file is a valid JSON
        .then(data => {
          prompts.push(...data); // Spread the array of data into the prompts array
          
          // Once all files are loaded, proceed with dynamic content insertion
          filesLoaded++;
          if (filesLoaded === files.length) {
            renderPrompts(); // Call the function to render the prompts after all are loaded
          }
        })
        .catch(error => console.error('Error loading prompt file:', error));
    });
  })
  .catch(error => console.error('Error fetching index.json:', error));

// Step 4: Function to render the prompts once all files are loaded
function renderPrompts() {
    const container = document.querySelector('.container');
    const categories = [...new Set(prompts.map(p => p.category))];

    categories.forEach(category => {
        const categoryHtml = `
            <div class="prompt-category">
                <div class="category-header">
                    <h2>${category}</h2>
                    <svg class="chevron" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7 10l5 5 5-5z"/>
                    </svg>
                </div>
                <div class="prompt-list">
                    ${prompts.filter(p => p.category === category).map(p => `
                        <div class="prompt-item" data-search="${p.title.toLowerCase()} ${p.content.toLowerCase()}">
                            <h3>${p.title}</h3>
                            <p>${p.content}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', categoryHtml);
    });

    // Interactive features (collapsing categories)
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', () => {
            const list = header.nextElementSibling;
            const chevron = header.querySelector('.chevron');
            list.style.display = list.style.display === 'none' ? 'grid' : 'none';
            chevron.classList.toggle('rotate');
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        document.querySelectorAll('.prompt-item').forEach(item => {
            const match = item.dataset.search.includes(searchTerm);
            item.classList.toggle('hidden', !match);
        });

        document.querySelectorAll('.prompt-category').forEach(category => {
            const hasVisible = category.querySelector('.prompt-item:not(.hidden)');
            category.style.display = hasVisible ? 'block' : 'none';
        });
    });
}

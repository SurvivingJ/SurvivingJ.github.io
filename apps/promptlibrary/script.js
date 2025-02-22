// Step 1: Initialize an empty array for the prompts
let prompts = [];

// Step 2: Fetch the prompts from the single JSON file
fetch('prompts.json')
  .then(response => response.json())
  .then(data => {
    prompts = data;
    renderPrompts();
  })
  .catch(error => console.error('Error loading prompts:', error));

// Step 3: Function to render the prompts
function renderPrompts() {
    const container = document.querySelector('.container');
    
    // Clear existing content
    container.innerHTML = '';
    
    // Get unique categories and sort them
    const categories = [...new Set(prompts.map(p => p.category))].sort();
    
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
                    ${prompts
                        .filter(p => p.category === category)
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map(p => `
                            <div class="prompt-item" data-search="${p.title.toLowerCase()} ${p.content.toLowerCase()}">
                                <h3>${p.title}</h3>
                                <p>${p.content}</p>
                                <button class="copy-button" data-content="${encodeURIComponent(p.content)}">
                                    Copy
                                </button>
                            </div>
                        `).join('')}
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', categoryHtml);
    });

    // Add copy functionality
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const content = decodeURIComponent(button.dataset.content);
            navigator.clipboard.writeText(content)
                .then(() => {
                    // Visual feedback
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                })
                .catch(err => console.error('Failed to copy:', err));
        });
    });

    // Interactive features (collapsing categories)
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', () => {
            const list = header.nextElementSibling;
            const chevron = header.querySelector('.chevron');
            list.style.display = list.style.display === 'none' ? 'grid' : 'none';
            chevron.style.transform = list.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        document.querySelectorAll('.prompt-item').forEach(item => {
            const match = item.dataset.search.includes(searchTerm);
            item.style.display = match ? 'block' : 'none';
        });

        // Show/hide categories based on whether they have visible items
        document.querySelectorAll('.prompt-category').forEach(category => {
            const hasVisibleItems = [...category.querySelectorAll('.prompt-item')]
                .some(item => item.style.display !== 'none');
            category.style.display = hasVisibleItems ? 'block' : 'none';
        });
    });
}

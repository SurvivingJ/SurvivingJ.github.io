// Step 1: Initialize an empty array for the prompts
        let prompts = [];

        // Step 2: Fetch the prompts from the JSON file
        fetch('prompts.json')
            .then(response => response.json())
            .then(data => {
                prompts = data;
                renderPrompts();
            })
            .catch(error => console.error('Error loading prompts:', error));

        // Helper function to escape HTML special characters
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // Step 3: Function to render the prompts
        function renderPrompts() {
            const container = document.querySelector('.container');
            
            // Clear existing content (except search bar)
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
                                .map(p => {
                                    // Handle both string and object content
                                    const displayContent = typeof p.content === 'object' 
                                        ? JSON.stringify(p.content, null, 2)
                                        : p.content;
                                    
                                    // Create a search string that includes nested content
                                    const searchContent = typeof p.content === 'object'
                                        ? JSON.stringify(p.content).toLowerCase()
                                        : p.content.toLowerCase();

                                    return `
                                        <div class="prompt-item" data-search="${p.title.toLowerCase()} ${searchContent}">
                                            <h3>${p.title}</h3>
                                            <pre class="content-display">${escapeHtml(displayContent)}</pre>
                                            <button class="copy-button" data-content="${encodeURIComponent(displayContent)}">
                                                Copy
                                            </button>
                                        </div>
                                    `;
                                }).join('')}
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', categoryHtml);
            });

            // Add copy functionality
            document.querySelectorAll('.copy-button').forEach(button => {
                button.addEventListener('click', () => {
                    const content = decodeURIComponent(button.dataset.content);
                    navigator.clipboard.writeText(content)
                        .then(() => {
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
                    
                    if (!list.style.display || list.style.display === 'grid') {
                        list.style.display = 'none';
                        chevron.classList.add('rotate');
                    } else {
                        list.style.display = 'grid';
                        chevron.classList.remove('rotate');
                    }
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

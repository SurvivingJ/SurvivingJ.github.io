const prompts = [
            { category: "Writing", title: "Blog Post Generator", content: "Generate blog post about..." },
            { category: "Coding", title: "React Component", content: "Create React component that..." }
        ];

        // Dynamic content insertion
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

        // Interactive features
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

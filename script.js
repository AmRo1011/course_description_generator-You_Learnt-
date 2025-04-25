document.getElementById('generate-btn').addEventListener('click', generateDescription);

async function generateDescription() {
    const title = document.getElementById('title').value.trim();
    const category = document.getElementById('category').value.trim();
    const language = document.getElementById('language').value;
    const btn = document.getElementById('generate-btn');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const description = document.getElementById('description');

    // Reset UI
    error.style.display = 'none';
    description.value = '';
    btn.disabled = true;
    loading.style.display = 'block';

    try {
        const response = await fetch('http://localhost:5000/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                category: category,
                language: language
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Server error: ${response.status}`);
        }

        const data = await response.json();
        description.value = data.description;

    } catch (err) {
        error.textContent = err.message || 'Failed to connect to server';
        error.style.display = 'block';
        console.error('Error:', err);
    } finally {
        btn.disabled = false;
        loading.style.display = 'none';
    }
} 
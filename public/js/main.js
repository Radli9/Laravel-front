document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8000/api/sections')
        .then(response => response.json())
        .then(data => {
            const sectionsDiv = document.getElementById('sections');
            data.forEach(section => {
                const sectionElement = document.createElement('div');
                sectionElement.innerText = section.name; // Adjust based on your section data structure
                sectionsDiv.appendChild(sectionElement);
            });
        })
        .catch(error => console.error('Error fetching sections:', error));
});
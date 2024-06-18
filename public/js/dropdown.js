document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            const parent = dropdown.parentElement;
            parent.classList.toggle('active');

            dropdowns.forEach(function(otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.parentElement.classList.remove('active');
                }
            });
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            dropdowns.forEach(function(dropdown) {
                dropdown.parentElement.classList.remove('active');
            });
        }
    });
});

// Populate contacts
const c = document.getElementById('contacts');
fetch('')
.then(response => response.json())
.then(data => {
    // Create business contacts
    const contact = document.createAttribute('div');
    const 
});

// Change styles according to view
c.classList.remove('card');
c.classList.add('directory-li');



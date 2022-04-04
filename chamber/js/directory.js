// Populate contacts
const c = document.getElementById('contacts');
fetch('https://raw.githubusercontent.com/oliviacantwell/wdd230/main/chamber/data/directory.json')
.then(response => response.json())
.then(data => {
    // Create business contacts
    let list = data.businesses
    for (let item in list) {
        const dict = list[item];
        // Create elements
        const contact = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('p'); 
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');
        // console.log(list[item].name);
        // Add text content
        // image.src = '../images/'+ dict.image;
        name.innerHTML = dict.name;
        address.innerHTML = dict.address;
        phone.innerHTML = dict.phone;
        address.innerHTML = dict.address;
        phone.innerHTML = dict.phone;
        website.innerHTML = dict.website;
        // Add class names
        contact.classList.add('card');
        image.classList.add('logo');
        // contact.classList.add('directory-li');
        // Append children to parents
        (async () => {
            const imageUrl = 'https://raw.githubusercontent.com/oliviacantwell/wdd230/main/chamber/images/' + dict.image;
            const response = await fetch(imageUrl);
            const imageBlob = await response.blob();
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
              const base64data = reader.result;
              image.src = base64data;
            };
          })();
        contact.appendChild(image);
        contact.appendChild(name);
        contact.appendChild(address);
        contact.appendChild(phone);
        contact.appendChild(website);
        c.appendChild(contact);
    };


});

// Change styles according to button view selection
document.querySelector('.card-btn').onclick = () => {
    c.classlist.add('card');
    c.classlist.remove('directory-li');
}
document.querySelector('.list-btn').onclick = () => {
    c.classList.remove('card');
    console.log(c.classList);
    c.classList.add('directory-li');
    console.log(c.classList);
}
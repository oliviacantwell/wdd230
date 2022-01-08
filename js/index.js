let date = new Date();
let year = date.getFullYear();
document.querySelector('#copyright').textContent += `${year}  ||  Olivia Cantwell  ||  Idaho`;
let currentDate = document.lastModified;
document.getElementById('modified').textContent = 'Last updated: ' + currentDate;
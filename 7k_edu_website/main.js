const toggleBtn = document.querySelector(".navbar_toogle_Btn");
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const emailButton = document.querySelector('.emailButton');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    const emailButton = document.getElementById('emailButton');
    if (emailButton) {
        emailButton.addEventListener('click', () => {
            let email = 'haneul110721@gmail.com';
            let subject = 'Subject Text';
            let body = 'Hello, I would like to know more about ... ';
            let mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            window.location.href = mailtoLink;
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    let navHome = document.getElementById('b-home');
    let navSearch = document.getElementById('b-search');
    let navAccount = document.getElementById('b-account');
    let navSettings = document.getElementById('b-settings');

    navHome.addEventListener('click', () => {
        window.location.href = "./app.html";
    });
    navSearch.addEventListener('click', () => {
        window.location.href = "./app.html?menu=1";
    });
    navAccount.addEventListener('click', () => {
        window.location.href = "./app.html?menu=2";
    });
    navSettings.addEventListener('click', () => {
        window.location.href = "./app.html?menu=3";
    });
});

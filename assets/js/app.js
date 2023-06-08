document.addEventListener('DOMContentLoaded', () => {

    //Les boutons de navigation
    let navHome = document.getElementById('b-home');
    let navSearch = document.getElementById('b-search');
    let navAccount = document.getElementById('b-account');
    let navSettings = document.getElementById('b-settings');

    //Les sections
    let sectionHome = document.getElementById('home');
    let sectionSearch = document.getElementById('search');
    let sectionAccount = document.getElementById('account');
    let sectionSettings = document.getElementById('settings');


    navHome.addEventListener('click', () => {
        navHome.classList.add('active');
        navSearch.classList.remove('active');
        navAccount.classList.remove('active');
        navSettings.classList.remove('active');
        sectionHome.style.display = null;
        sectionSearch.style.display = "none";
        sectionAccount.style.display = "none";
        sectionSettings.style.display = "none";
    });

    navSearch.addEventListener('click', () => {
        navHome.classList.remove('active');
        navSearch.classList.add('active');
        navAccount.classList.remove('active');
        navSettings.classList.remove('active');
        sectionHome.style.display = "none";
        sectionSearch.style.display = "flex";
        sectionAccount.style.display = "none";
        sectionSettings.style.display = "none";
    });

    navAccount.addEventListener('click', () => {
        navHome.classList.remove('active');
        navSearch.classList.remove('active');
        navAccount.classList.add('active');
        navSettings.classList.remove('active');
        sectionHome.style.display = "none";
        sectionSearch.style.display = "none";
        sectionAccount.style.display = "flex";
        sectionSettings.style.display = "none";
    });

    navSettings.addEventListener('click', () => {
        navHome.classList.remove('active');
        navSearch.classList.remove('active');
        navAccount.classList.remove('active');
        navSettings.classList.add('active');
        sectionHome.style.display = "none";
        sectionSearch.style.display = "none";
        sectionAccount.style.display = "none";
        sectionSettings.style.display = "flex";
    });



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if(urlParams.get('menu')){
    if(urlParams.get('menu') == "1"){
        navHome.classList.remove('active');
        navSearch.classList.add('active');
        navAccount.classList.remove('active');
        navSettings.classList.remove('active');
        sectionHome.style.display = "none";
        sectionSearch.style.display = "flex";
        sectionAccount.style.display = "none";
        sectionSettings.style.display = "none";
    }
    if(urlParams.get('menu') == "2"){
        navHome.classList.remove('active');
        navSearch.classList.remove('active');
        navAccount.classList.add('active');
        navSettings.classList.remove('active');
        sectionHome.style.display = "none";
        sectionSearch.style.display = "none";
        sectionAccount.style.display = "flex";
        sectionSettings.style.display = "none";
    }
    if(urlParams.get('menu') == "3"){
        navHome.classList.remove('active');
        navSearch.classList.remove('active');
        navAccount.classList.remove('active');
        navSettings.classList.add('active');
        sectionHome.style.display = "none";
        sectionSearch.style.display = "none";
        sectionAccount.style.display = "none";
        sectionSettings.style.display = "flex";
    }
};
});


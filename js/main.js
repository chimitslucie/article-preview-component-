const profil_share = document.querySelector('.profil__share');

profil_share.addEventListener('click', function(event) {
    const divShare = profil_share.parentNode;

    if (divShare.classList.contains('active')) {
        divShare.classList.remove('active') 
    } else {
        divShare.classList.add('active') 
    }
})
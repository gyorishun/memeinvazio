const iconPlus = document.querySelector('.fixed');
//console.log(iconPlus);

window.addEventListener('DOMContentLoaded', getMemes);
iconPlus.addEventListener('click', () => {
    window.location.href = '../html/newMeme.html';
});

async function getMemes() {
    const response = await fetch('http://127.0.0.1:3000/api/memes/getMemes', {
        method: 'GET',
        credentials: 'include'
    });
}
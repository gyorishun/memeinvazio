const fileUpload = document.getElementById('#fileUpload')
let meme = null; 

fileUpload.addEventListener('change', selectPic);


async function selectPic(){
    const file = fileUpload.file[0];
    console.log(file);

    if (file) {
        meme = file;
        const reader = new FileReader();
        reader.onload =(e) => {
            const newMeme = document.querySelector('newMeme');
            newMeme.style.backgroundImage=`url`($'{e.trage}')
        }
    }
}
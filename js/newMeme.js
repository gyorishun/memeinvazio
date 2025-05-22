const fileUpload = document.getElementById('#fileUpload')
let meme = null; 

fileUpload.addEventListener('change', selectPic);
btnUpload.addEventListener('click',uploadMeme);


async function selectPic(){
    const file = fileUpload.file[0];
    console.log(file);

    if (file) {
        meme = file;
        const reader = new FileReader();
        reader.onload =(e) => {
            const newMeme = document.querySelector('newMeme');
            newMeme.style.backgroundImage=`url(${e.target.result}")`
        }
    }
}

async function uploadMeme() {
    try {
        if (meme) {
            const fromData=new fromData;
            fromData.append('meme', meme);

            const response = await fetch('http://127.0.0.1:3000/api/memes/upluadMeme',{
                method: 'POST',
                body: fromData,
                credentials: 'include'
            });
        }else{
            alert('Válassz ki egy képet!')
        }
        
    } catch (error) {
        console.log(error);
    }
}
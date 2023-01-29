async function getWordTranslation(word) {
    const response = await fetch("https://frengly.com/frengly/data/translateREST", {
        method: "POST",
        body: JSON.stringify({
            src: 'ru',
            dest: 'en',
            text: word,
            email: 'dana-kon@ramble.ru',
            password: 'lfYZ161096',
        }),
        headers: { "Content-Type": "application/json" }
    });
    const wordData = await response.json();

    return wordData.translation;
}

async function getWordSound(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const soundData = await response.json();
    const audio = document.createElement('audio');

    audio.setAttribute('src', soundData[0].phonetics[0].audio);

    return audio;
}

async function getWordPicture(word) {
    const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=OMUSAWutprBM7ncm9fuHzV4VIpTVMsUnzLHv_iy0fhU&query=${word}`);
    const imageData = await response.json();

    return imageData.results[0].urls.small;
}




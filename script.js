const baseurl = "https://api.imgur.com/3/image";
const clientID = "f6262765e5ae54d";

uploadButton.onclick = request;
function request() {
    fetch(`${baseurl}`, {
        method: 'POST',
        headers: {
            "Authorization": `Client-ID ${clientID}`
        },
        body: {
            'image': `${imageFile.value}`
        },
    }).then(result => result.json())
        .then(json => console.log(json))
        .catch(e => console.log(e))
}
const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

const onGenerateSubmit = (e) => {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log('the URL is', url);
    console.log('the size is', size);
     
    if(url===''){
        alert('Please enter the URL!');
    }
    else{
        clearUI();
        showSpinner();
        setTimeout(() =>{
            hideSpinner();
            generateQrCode(url, size);
            setTimeout(() => { 
                const saveURL = qr.querySelector('img').src;
                createSaveButton(saveURL);
            }, 50);
            createSaveButton
        }, 1000);
    }

}

const generateQrCode = (url, size) => {
    const qrcode = new QRCode('qrcode',
    {
        text: url,
        width: size,
        height: size
    });
}

const saveQRCode = (qrcode) => {
    
}

const createSaveButton = (saveURL) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto'
    link.href = saveURL;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}
const clearUI = () => {
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link');
    if(saveLink) saveLink.remove();
}

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
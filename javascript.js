

function generate() {
    // console.log('working');
    var length = 8
    // console.log('length working');
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+-./:;<=>?@[\]^_`{|}~"
    var password = ''
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    //console.log('password working', password);
    //var h1 = document.createElement('h1')
    //var text = document.createTextNode(password)
    //h1.appendChild(text)
    document.getElementById('password').value = password
}

document.getElementById('generate').addEventListener('click', function () {
    // console.log('you got clicked')
    generate();
})


document.getElementById('copy').addEventListener('click', function () {
    console.log('you got clicked')
    var textToCopy = document.getElementById('password')
    textToCopy.select()
    textToCopy.setSelectionRange(0, 9000)
    document.execCommand('copy')
})
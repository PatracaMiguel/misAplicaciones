const{app,BrowserWindow} = require('electron');
const path = require('path');


function crearVenatana(){
    let crearVenatana = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    crearVenatana.loadFile('index.html');
}

app.whenReady().then(crearVenatana);

app.on('window-all-closed', function () {
    if (process.platform == 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().legth === 0) {
        crearVenatana();
    }
});
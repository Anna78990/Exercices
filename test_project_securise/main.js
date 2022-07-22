const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    resizable: false,
    frame: false,
    width: 250,
    height: 500,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },});
  mainWindow.loadFile('index.html');
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
})


ipcMain.handle('result', (event, data) => {
  var min = 0 ;
  var max = 4 ;
  
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
if (data[a]){
    return(data[a]);
}else{
    return('RESTART');
}
})

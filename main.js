const { app, BrowserWindow } = require('electron');
const { ipcMain } = require('electron')
const ejse = require('ejs-electron')

const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        webSecurity: false,
        preload: path.join(__dirname, 'preload.js'),
      },
  });
  ipcMain.handle('ping', () => 'pong');
  win.loadFile('html/login.html');
  win.maximize();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
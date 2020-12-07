const { app, BrowserWindow } = require('electron');
const path = require('path');
const appServer = require("./app");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: "Calculadora Científica",
    width: 1242,
    icon: "src/static/img/icon/icon.ico",
    height: 663,
    minWidth: 1242,
    minHeight: 663,
    center: true,
    resizable: false,
    backgroundColor: "#fff"
  });

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Servidor
const port = process.env.PORT || 3000;
appServer.listen(port, () => {
  console.log(`${appServer.get("appName")}`);
});
const appServer = require("./app");
const path = require('path')
import { app, BrowserWindow } from "electron";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: "Calculadora Científica",
    width: 1242,
    icon: "src/static/img/icon/icon.ico",
    height: 663,
    minWidth: 1242,
    minHeight: 663,
    center: true,
    resizable: false,
    // kiosk: true,
    // icon: __dirname + "/src/static/img/icon/icon.ico",
    backgroundColor: "#fff"
  });

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000");

  // Open the DevTools.
 // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// Cerrar la app cuando todas las ventandas esten cerradas
app.on("window-all-closed", () => {
  app.quit();
});

// Desactivar el menubar
app.on("browser-window-created", function (err, window) {
  window.setMenu(null);
});

// Servidor
const port = process.env.PORT || 3000;
appServer.listen(port, () => {
  console.log(`${appServer.get("appName")}`);
});

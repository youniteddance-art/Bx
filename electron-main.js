"use strict";

const { app, BrowserWindow, shell } = require("electron");
const path = require("path");

app.setAppUserModelId("dance.younited.brixumrechner");

function createWindow() {
  const window = new BrowserWindow({
    width: 1180,
    height: 820,
    minWidth: 390,
    minHeight: 600,
    title: "Brix Umrechner",
    icon: path.join(__dirname, "web", "icon-512.png"),
    backgroundColor: "#f1f3f7",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  window.loadFile(path.join(__dirname, "web", "index.html"));
  window.webContents.setWindowOpenHandler(function (details) {
    if (details.url.startsWith("https://")) shell.openExternal(details.url);
    return { action: "deny" };
  });
}

app.whenReady().then(function () {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

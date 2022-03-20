# mview


## create react app

```bash
npx create-react-app my-app --template typescript
```

## install electron node module

```bash
npm install --save-dev electron electron-builder concurrently wait-on cross-env
```

```bash
npm install --save electron-is-dev
```

## make electron.js

public/electron.js

```javascript
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.focus();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
```

## update package.js

```json
{
"description": "electron test app",
  "author": "ricepotato",
  "main": "public/electron.js",
  "homepage": "./",
  "build": {
    "productName": "electron-test-app",
    "asar": true,
  },
  
  
  "scripts": {
    "react-start": "react-scripts start",
    "react-build": "react-scripts build",
    "react-test": "react-scripts test",
    "react-eject": "react-scripts eject",
    "start": "concurrently \"cross-env NODE_ENV=development BROWSER=none yarn react-start\" \"wait-on http://localhost:3000 && electron .\"",
    "build": "yarn react-build && electron-builder",
    "release": "yarn react-build && electron-builder --publish=always"
  },
}
```
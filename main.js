const { app, BrowserWindow } = require('electron')

//to keep from closing when JS garbage collects
let win;

function createWindow() {
  win = new BrowserWindow({width:800, height: 600})
  //load index.html on start
  win.loadURL(`file://${__dirname}/index.html`)

  //open devtools on start
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  //to keep app running on mac until forced shutdown, as common on mac apps
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

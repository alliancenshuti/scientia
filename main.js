import { app,BrowserWindow } from "electron";
import fs from "fs"
import { changewallpaper, revertChanges } from "./src/wallpaper-change.js";
import { scheduleJob } from "./src/scheduler.js";

const imageUrl = fs.readdirSync('./images')
const time = { second:20 }

function createwindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(()=>{
    createwindow() 

    // for mac : if there are no windows open
    app.on('activate',()=>{
       if (BrowserWindow.getAllWindows().length === 0) createwindow()
    })

    const callback = () =>{
        changewallpaper(imageUrl[Math.floor(Math.random() * imageUrl.length)])
        console.log('changed picture ')
    }

    scheduleJob(callback,time)
})

app.on('window-all-closed',()=>{
    if (process.platform !== "darwin") {
        revertChanges() // restore the default wallpaper 
        app.quit()
    }
})
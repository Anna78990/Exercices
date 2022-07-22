const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  result: async(data) => await ipcRenderer.invoke('result', data)
})
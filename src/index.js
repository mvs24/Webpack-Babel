const button = document.createElement('button')
button.innerText = 'Click me for CODE SPLITTING'
button.onclick = () => {
    System.import('./imageViewer.js').then(importedModule => {
        importedModule.default();
    })
}

document.body.appendChild(button)
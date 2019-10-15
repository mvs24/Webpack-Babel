const button = document.createElement('button')
button.innerText = 'Click me for CODE SPLITTING'
button.onclick = () => {
    System.import('./imageViewer.js').then(importedModule => {
        // code splitting
        importedModule.default();
    })
}

document.body.appendChild(button)
function establecerVersion(idSelector , version){
    let elemento = document.getElementById(idSelector);

    if (elemento){
        elemento.innerText = version;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const componente = ['Node', 'Chromium', 'Electron'];	

    for(const componente of componente){
        establecerVersion(`version${componente}`, process.versions[componente.toLowerCase()]);
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const componentes = ['Node', 'Chrome', 'Electron']

    for(const componente of componentes){
        establecerVersion(`version${componente}`, process.versions[componente.toLowerCase()]);
    }
});
    
document.addEventListener('DOMContentLoaded', ()=> {
    const template = `
                <fas-icon lib="br" name="facebook" color="icon:sunset" class="::md"></fas-icon>
                <fas-icon lib="br" name="x-twitter" color="icon:sunset" class="::md"></fas-icon>
                <fas-icon lib="br" name="instagram" color="icon:sunset" class="::md"></fas-icon>
                <fas-icon lib="br" name="pinterest" color="icon:sunset" class="::md"></fas-icon>
                <span class="lato">Sharing is caring!</span>        
`

    const container = document.createElement('div');
    container.innerHTML = template;
    container.classList.add('my:5');
    const hero = document.getElementById('hero-red');
    hero.appendChild(container);
})

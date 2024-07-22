class imgElemento extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const imgSrc = this.getAttribute('src');
        const imgAlt = this.getAttribute('alt');
        
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = imgAlt;
        
        this.appendChild(img);
    }
}

customElements.define('img-elemento', imgElemento);

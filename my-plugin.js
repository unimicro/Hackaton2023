// web component
class MyPlugin extends HTMLElement {
  
    constructor() {
      super();      
    }
   
    // connect component
    connectedCallback() {
      this.textContent = `Hello World!`;
    }
  }

  // web component
class MyPluginDetails extends HTMLElement {
  
  constructor() {
    super();
    this.id = 'World';
  }
  
  // component attributes
  static get observedAttributes() {
    return ['id'];
  }
  
  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {

    if (oldValue === newValue) return;
    this[ property ] = newValue;
    
  }
  
  // connect component
  connectedCallback() {
    this.textContent = `Hello ${ this.id }!`;
  }
  
}
  

const url = window.location.pathname;
if (url.endsWith('/')) {
  customElements.define( 'my-plugin', MyPlugin );
}else{
  customElements.define( 'my-plugin-details', MyPluginDetails );
}

  // register component
  
  
  
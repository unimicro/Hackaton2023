// web component
class HelloWorld extends HTMLElement {
  
    constructor() {
      super();      
    }
    

    
    
    // connect component
    connectedCallback() {
      this.textContent = `Hello World!`;
    }
    
  }
  
  // register component
  customElements.define( 'hello-world', HelloWorld );
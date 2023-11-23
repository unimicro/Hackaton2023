const template = document.createElement("my-plugin");



// web component
class MyPlugin extends HTMLElement {
  
  constructor() {
    super();

  }

  connectedCallback() {
    this.h3 = "Hello World!";
    this.render();
  }

  render() {
    this.h3;
  }

}

  // web component
class MyPluginDetails extends HTMLElement {
  
  lastSegment = url.split('/').filter(Boolean).pop();

  constructor() {
    super();
  }
  
  
  // connect component
  connectedCallback() {    
    this.h3 = "Hello World!";
    this.h2 = "ID: " + lastSegment;
    
  }
  
}
  

const url = window.location.pathname;
if (url.endsWith('/')) {
  template.innerHTML = `
  <style>
    .hello {
      font-family: sans-serif;
      background: #f4f6f7;
      width: 250px;
      display: grid;
      grid-template-columns: 1fr;
      margin-bottom: 10px;
    }

  </style>
  <div class="hello">            
      <h3></h3>
  </div>`;
  customElements.define( 'my-plugin', MyPlugin );
}else{
  template.innerHTML = `
  <style>
    .hello {
      font-family: sans-serif;
      background: #f4f6f7;
      width: 250px;
      display: grid;
      grid-template-columns: 1fr;
      margin-bottom: 10px;
    }

  </style>
  <div class="hello">            
      <h3></h3>
      <h2></h2>
  </div>`;
  
  customElements.define( 'my-plugin', MyPluginDetails );
}

  // register component
  
  
  
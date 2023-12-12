import { LitElement, html, css } from 'lit';
import '../wishlist/components/wishlist-input-text'
export class WishlistApp extends LitElement {
  

  static get styles(){
    return css `
    .main-container {
      margin: 50px auto;
      width: 500px;
      border-radius: 10px;
      justify-content: center;
      max-height: 600px;
    }
    .title {
      text-align: center;
      color: #0f22c7;
    }
    .input-text{
      width: 300px;
    }
    .task-container {
      justify-content: start;
      display: flex;
      align-items: center;
    }
    .item{
      margin-left: 20px;
      cursor: pointer;
      width: 25px;
      height: 25px;
      text-align: start;
    }
    .elemento{
      padding-bottom: 10px;
    }
      
      .btn-delete{
        width: 100%;
        height: 35px;
        background-color: #f30109;
        border:1px solid #f30109;
        color:white;
        border-radius: 10px;
        cursor: pointer;

      }
      .btn-delete:hover{
        background-color: #fb0000;
      }
      .btn-delete:active{
        box-shadow: 0 2px #eee;
        transform: translateY(4px);
      }
      .btn-container{
        padding:20px;
        text-align: right;
      }

      .label{
        transition: background-color 1s ease;
        font-size: 25px;
        width: 100%;
      }
      .item, .label{
        vertical-align: middle;
      }
      .btn-e{
        width:120px;
        height:30px;
        background-color:red;
        color:white;
        border-radius:30px;
        border: 2px solid red;
      }
      .btn-e:hover{
        cursor:pointer;
      }
      .btn-ed{
        width:120px;
        height:30px;
        background-color:green;
        color:white;
        border-radius:30px;
        border: 2px solid green;
      }
      .btn-ed:hover{
        cursor:pointer;
      }
    `;
  }

  static get properties(){
    return {
      miDato: {type: String},
      listaTareas : { type: Array}
    };
  }

  constructor(){
    super();
    this.miDato = ' ';
    this.listaTareas= [];
    this.timers = [];
    this.editingIndex = -1;
  }

  
  render() {
    var listaTareasArr = [];
    this.listaTareas.forEach((tareas, index)=>{
      listaTareasArr.push(html`
      ${index === this.editingIndex?
        html`
        <div class="elemento">
        <input
          type="text" 
          .value=${tareas} 
          @keydown=${(e) => this.handleKeyDown(e, index)}>
        <button @click="${(event)=> this.eliminarItem(event,index)}" class="btn-e">Eliminar</button>
        <button @click=${() => this.editarItem(index)} class="btn-ed" id="btn-edit-${index}">Editar</button>
        </div>`:
        html`
        <div class="elemento">
        <input 
          type="checkbox" 
          class="item" 
          id='cb_${index}' 
          @change=${(event) => this.setTimer(event,index)}>
        <label class="label" id="lb_${index}">${tareas}</label>
        <button @click="${(event)=> this.eliminarItem(event,index)}" class="btn-e">Eliminar</button>
        <button @click=${() => this.editarItem(index)} class="btn-ed" id="btn-edit-${index}">Editar</button>
        </div>`
        }
      <br id="br_${index}">`);
        try {
          if(index === this.listaTareas.length -1){
            this.timers[index] = {
              timeout1: setTimeout(()=>{
                this.colors(index, '#9AD576');
              },2000),
              timeout2: setTimeout(()=>{
                this.colors(index, '#F6FF99');
              },5000),
              timeout3: setTimeout(()=>{
                this.colors(index, '#F97171');
              },8000)
            };
          }
        } catch (error) {
          alert('Opps ha ocurrido un error!!!')
        }
      
    });
    return html`
    <div class="main-container">
      <h1 class="title">Lista de Tareas</h1>
      
      <wishlist-input-text class="input-text" id="inputText" value=${this.miDato} @keydown="${this.inputKeyDown}"></wishlist-input-text>
      
      <div id="taskContainer">
        ${listaTareasArr}
      </div>
      <div class="btn-container">
        ${listaTareasArr.length != 0 && this.listaTareas.length != 0?html`<button class="btn-delete" @click=${this.removeCheckBox}>Eliminar todas las tareas</button></div>`:[]}
      </div>
      </div>
    `;
  }

  inputKeyDown(e){
    if(e.key === 'Enter'){
      this.miDato = e.target.value;
      this.listaTareas.push(this.miDato);
      this.resetTexto(e);
    }
  }

  resetTexto(e){
    this.miDato = '';
    e.target.value = '';
  }
  setTimer(event, index) {
    //const labels = this.shadowRoot.querySelectorAll('.item + label');
    const ideqtiuqtea = `lb_${index}`;
    const etiqueta = this.shadowRoot.getElementById(ideqtiuqtea);
    const checkbox = event.target;

    if (!checkbox.checked) {
      etiqueta.style.textDecoration = 'none';
      this.timers[index] = {
        timeout1: setTimeout(()=>{
          console.log('1');
          this.colors(index, '#9AD576');
        },2000),
        timeout2: setTimeout(()=>{
          this.colors(index, '#F6FF99');
        },5000),
        timeout3: setTimeout(()=>{
          this.colors(index, '#F97171');
        },8000)
      };
    } else {
        etiqueta.style.color = 'black';
        etiqueta.style.textDecoration = 'line-through';
        etiqueta.style.background = 'none';
        clearTimeout(this.timers[index].timeout1);
        clearTimeout(this.timers[index].timeout2);
        clearTimeout(this.timers[index].timeout3);
    }
  }
  colors(index, color) {
    const ideqtiuqtea = `lb_${index}`;
    const etiqueta = this.shadowRoot.getElementById(ideqtiuqtea);
    try {
      //const label = this.shadowRoot.querySelectorAll('.item + label');
      etiqueta.style.color = color;
    } catch (error) {
    }
    
}
  removeCheckBox(){
    /*
    let checkBox = this.shadowRoot.getElementById('taskContainer');
    while(checkBox.firstChild){
      checkBox.removeChild(checkBox.firstChild);
    }
    */
    this.listaTareas = [];
  }

  eliminarItem(event,index)
  {
    const checkboxId = `cb_${index}`;
    const checkbox = this.shadowRoot.getElementById(checkboxId);
    if (checkbox) {
      checkbox.remove();
    }
    const labelId = `lb_${index}`;
    const label = this.shadowRoot.getElementById(labelId);
    if (label) {
      label.remove();
    }
    const brId = `br_${index}`;
    const br = this.shadowRoot.getElementById(brId);
    if (br) {
      br.remove();
    }
    const btnEditar = `btn-edit-${index}`;
    const editar = this.shadowRoot.getElementById(btnEditar);
    if (editar) {
      editar.remove();
    }
    event.target.remove();


  }


  editarItem(index) {
    this.editingIndex = index;
    this.requestUpdate(); // Actualiza el componente para reflejar el cambio a modo de edición
  }

  guardarCambios(index, nuevoValor) {
    this.listaTareas[index] = nuevoValor;
    this.editingIndex = -1; // Finaliza el modo de edición
    this.requestUpdate(); // Actualiza el componente para reflejar el cambio después de editar
  }

  handleKeyDown(event, index) {
    if (event.key === 'Enter') {
      const nuevoValor = event.target.value;
      this.guardarCambios(index, nuevoValor);
    }
  }

}
customElements.define('wishlist-app', WishlistApp);

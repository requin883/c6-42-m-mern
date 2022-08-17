import React from 'react';
 
class Formulario extends React.Component {

constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    
handleChange(event) {
  let input = this.state.input;
  input[event.target.name] = event.target.value;
  this.setState({input});}
   
handleSubmit(event) {
  event.preventDefault();
  if(this.validate()){
    console.log(this.state);
    let input = {};
    input["name"] = "";
    input["email"] = "";
    input["subject"] = "";
    this.setState({input:input});

    alert('Mensaje enviado con éxito! Te contactaremos a la brevedad');
  }
}

validate(){
  let input = this.state.input;
  let errors = {};
  let isValid = true;

  if (!input["name"]) {
    isValid = false;
    errors["name"] = "Por favor, ingrese su nombre y apellido";
  }

/*   if (typeof input['name"] !== "undefined"){
    const sim = /^\S*$/;
    if(input["name"].length < 3 || !sim.test(input["name"])){
        isValid = false;
        errors["name"] = "Please enter valid username.";
    }
  } */

  if (!input["email"]) {
    isValid = false;
    errors["email"] = "Por favor, ingrese su correo electrónico";
  }

  if (typeof input["email"] !== "undefined") {   
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(input["email"])) {
      isValid = false;
      errors["email"] = "Por favor, ingrese un correo electrónico válido";
    }
  }

  if (!input["subject"]) {
    isValid = false;
    errors["subject"] = "Por favor, ingrese un asunto";
  }

  if (!input["message"]) {
    isValid = false;
    errors["message"] = "Por favor, ingrese su mensaje";
  }

  this.setState({
    errors: errors
  });
  
  return isValid;
}

  render() {
    return ( 
    <form onSubmit={this.handleSubmit} className="mb-2">
        <div class="form-group row mb-4">
          <label for="name" class="col-sm-3 col-form-label text-right">Nombre y apellido</label>
          <div class="col-sm-6">
          <input 
          type="text" 
          name="name"
          class="form-control" 
          id="name" 
          value={this.state.input.name}
          onChange={this.handleChange}
          placeholder="Ingrese su nombre y apellido"/>
          </div>
        <div className="text-danger">{this.state.errors.name}</div>
        </div>

        <div class="form-group row mb-4">
        <label for="email" class="col-sm-3 col-form-label text-right">Email</label>
        <div class="col-sm-6">
        <input 
        type="text" 
        name="email" 
        value={this.state.input.email}
        onChange={this.handleChange}
        class="form-control" 
        placeholder="Ingrese su email" 
        id="email" />
        </div>
        <div className="text-danger">{this.state.errors.email}</div>
        </div>
       

        <div class="row mb-4">
        <label for="subject" class="col-sm-3 col-form-label text-right">Asunto</label>
        <div class="col-sm-6">
        <input 
        type="text" 
        name="subject" 
        value={this.state.input.subject}
        onChange={this.handleChange}
        class="form-control" 
        id="email" 
        placeholder="Ingrese el asunto"/>
        </div>
        <div className="text-danger">{this.state.errors.subject}</div>
        </div>
       
        <div class="row mb-4">
        <label for="message" class="col-sm-3 col-form-label text-right">Mensaje</label>
        <div class="col-sm-6">
        <textarea 
        className="form-control" 
        id="message" 
        name="message"
        value={this.state.input.message}
        onChange={this.handleChange}
        placeholder="Ingrese su mensaje"></textarea>
        </div>
        <div className="text-danger">{this.state.errors.message}</div>
        </div>

        <button type="submit" value="Submit" className="btn btn-outline-dark btn-lg">Enviar</button>
    </form>
    ) 
  }
}
 
export default Formulario;
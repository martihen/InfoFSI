import { Component, OnInit } from '@angular/core';
import { CorreoService } from '../services/correo.service';
import swal from 'sweetalert2'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contacto: any = {};
  strName:string = 'Debe ingresar su nombre.';
  strEmail:string = 'Debe ingresar su correo.'
  strInvalidEmail:string = 'Correo invalido.';
  strAsunto:string = 'Debe ingresar un mensaje.';
  strAsuntoMin:string = 'Debe ingresar más de 10 caracteres.';
  strAsuntoMax:string = 'Debe ingresar más de 10 caracteres.';
  isValidFormSubmitted = false;
  validateEmail = true;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  telefonoPattern = "[0-9]+";
  constructor(public _correoService: CorreoService){

  }

  ngOnInit() {
  }

  contactForm(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
     
    this._correoService.sendMessage(form.value).subscribe(() => {
      swal.fire({
        title: 'Formulario de contacto',
        text: 'Mensaje enviado correctamente',
        type: 'success',
        confirmButtonText: 'ok'
      })
    }); 
    this.isValidFormSubmitted = true;
    form.resetForm();
  }
}

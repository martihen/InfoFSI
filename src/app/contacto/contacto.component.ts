import { Component, OnInit } from '@angular/core';
import { CorreoService } from '../services/correo.service';
import swal from 'sweetalert2'
import { Form } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public _correoService: CorreoService) {
  }

  ngOnInit() {
  }

  contactForm(form: Form) {
    console.log("contact form");
    this._correoService.sendMessage(form).subscribe(() => {
      swal.fire({
        title: 'Formulario de contacto',
        text: 'Mensaje enviado correctamente',
        type: 'success',
        confirmButtonText: 'ok'
      })
    });
    console.log("contact form"+form);
  }
}

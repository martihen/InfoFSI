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
  public contacto: any = {};
  constructor(public _correoService: CorreoService) {
  }

  ngOnInit() {
    this.contacto = {}; 
  }

  valida(){
    this.contacto;
    
    return true;
  }

  contactForm(form: Form) {
    //console.log(JSON.stringify(this.contacto));
    //if (this.valida){
      this._correoService.sendMessage(form).subscribe(() => {
        swal.fire({
          title: 'Formulario de contacto',
          text: 'Mensaje enviado correctamente',
          type: 'success',
          confirmButtonText: 'ok'
        })
      });
      this.contacto = {}; 
    // }else{
      
    // }
    
  }
}

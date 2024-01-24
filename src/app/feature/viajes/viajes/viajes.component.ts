import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent {

  constructor(private _formBuilder: FormBuilder){}

datosViaje = this._formBuilder.group({
  nombre: ['', Validators.required],
  apellido: ['', Validators.required],
  telefono: ['', Validators.required],
  transporte: ['', Validators.required],
  mensaje: ['', Validators.required]
})

async submitForm(){
  emailjs.init('0iqF7t81iqHpG9ou3')
  let res = await emailjs.send("service_snxjftg","template_hdclsf7",{
    nombre: this.datosViaje.value.nombre,
    apellido: this.datosViaje.value.apellido,
    telefono: this.datosViaje.value.telefono,
    transporte: this.datosViaje.value.transporte,
    mensaje: this.datosViaje.value.mensaje
  });
  alert('Mensaje enviado');
  this.datosViaje.reset();
}
}

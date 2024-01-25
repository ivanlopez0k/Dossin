import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, FormGroup } from '@angular/forms';

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

submitForm(){
  console.log('Formulario enviado:', this.datosViaje.value)
}
}

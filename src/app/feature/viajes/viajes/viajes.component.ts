import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent {
  datosViaje:FormGroup;
  constructor(private _formBuilder: FormBuilder){
    this.datosViaje = this._formBuilder.group({
      
      tipoForm: 'Viajes',
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      transporte: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    })
  }

  getControl(formControlName: string) {
    return this.datosViaje.controls[formControlName];
  }
  
  isFormControlInvalid(formControlName: string): boolean {
    const control = this.getControl(formControlName);
    return control.invalid && (control.dirty || control.touched);
  }

  submitForm(){
    if(this.datosViaje.valid){
      console.log('Formulario enviado:', this.datosViaje.value);
      this.datosViaje.reset();
    }
    else {
      this.datosViaje.markAllAsTouched();
      console.log("No es valido el formulario, cabeza");
    }
  }
}

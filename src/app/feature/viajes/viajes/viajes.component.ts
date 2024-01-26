import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent {

  datosViaje: FormGroup;

constructor(private fb: FormBuilder){
  this.datosViaje = this.fb.group({
    nombre: new FormControl ('', Validators.required),
    apellido: new FormControl ('', Validators.required),
    telefono: new FormControl ('', Validators.required),
    transporte: new FormControl ('', Validators.required),
    mensaje: new FormControl ('', Validators.required)
  })
}
  

getControl(formControlName: string) {
  return this.datosViaje.controls[formControlName];
}
submitForm(form: FormGroup): void {
  if(form.valid){
    console.log(form.value);
    form.reset();
  }
  else {
    form.markAllAsTouched();
    console.log("No es valido el formulario, cabeza");
  }
}
}

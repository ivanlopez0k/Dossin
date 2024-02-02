import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit{
  datosViaje:FormGroup;
  constructor(private _formBuilder: FormBuilder, private translate: TranslateService){
    this.datosViaje = this._formBuilder.group({
      
      tipoForm: 'Viajes',
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      transporte: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
      
  }

  getControl(formControlName: string) {
    return this.datosViaje.controls[formControlName];
  }
  
  isFormControlInvalid(formControlName: string): boolean {
    const control = this.getControl(formControlName);
    return control.invalid && (control.dirty || control.touched);
  }

async submitForm(){
    if(this.datosViaje.valid){
      emailjs.init('0iqF7t81iqHpG9ou3')
      let res = await emailjs.send("service_snxjftg","template_hdclsf7",{
        tipoForm: this.datosViaje.value.tipoForm,
        nombre: this.datosViaje.value.nombre,
        apellido: this.datosViaje.value.apellido,
        telefono: this.datosViaje.value.telefono,
        transporte: this.datosViaje.value.transporte,
        mensaje: this.datosViaje.value.mensaje
      });
      alert('Mensaje enviado');
      this.datosViaje.reset();
    
    }
    else {
      this.datosViaje.markAllAsTouched();
      console.log("No es valido el formulario, cabeza");
    }
  }
}

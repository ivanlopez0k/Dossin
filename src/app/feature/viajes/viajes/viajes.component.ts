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
  datosEmpresa:FormGroup;
  datosChofer:FormGroup;
  datosCamion:FormGroup;

  constructor(private _formBuilder: FormBuilder, private translate: TranslateService){
    this.datosViaje = this._formBuilder.group({
      tipoForm: 'Viajes',
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      transporte: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    })

    this.datosEmpresa = this._formBuilder.group({
      tipoForm: 'Empresa',
      ahaAfip: new FormControl('', Validators.required),
      libreDeuda: new FormControl('', Validators.required),
      constanciaIIBB: new FormControl('', Validators.required),
      constanciaCBU: new FormControl('', Validators.required)
    })

    this.datosChofer = this._formBuilder.group({
      tipoForm: 'Chofer',
      dni: new FormControl('', Validators.required),
      licencia: new FormControl('', Validators.required),
      altaTemprana: new FormControl('', Validators.required),
      art: new FormControl('', Validators.required),
      linti: new FormControl('', Validators.required),
      seguroVida: new FormControl('', Validators.required)
  
    })

    this.datosCamion = this._formBuilder.group({
      tipoForm: 'Camion',
      rto: new FormControl('', Validators.required),
      polizaSeguro: new FormControl('', Validators.required),
      pasoSeguro: new FormControl('', Validators.required),
      ruta: new FormControl('', Validators.required),
      certificadoSatelital: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
      
  }

  getControl(formControlName: string) {
    return this.datosViaje.controls[formControlName];
  }
  
  getEmpresaControl(formControlName: string) {
    return this.datosEmpresa.controls[formControlName];
  }

  getChoferControl(formControlName: string) {
    return this.datosChofer.controls[formControlName];
  }
  
  getCamionControl(formControlName: string) {
    return this.datosCamion.controls[formControlName];
  }

  isFormControlInvalid(formControlName: string): boolean {
    const control = this.getControl(formControlName);
    return control.invalid && (control.dirty || control.touched);
  }

  isEmpresaInvalid(formControlName: string): boolean {
    const control = this.getEmpresaControl(formControlName);
    return control.invalid && (control.dirty || control.touched);
  }

  isChoferInvalid(formControlName: string): boolean {
    const control = this.getChoferControl(formControlName);
    return control.invalid && (control.dirty || control.touched);
  }

  isCamionInvalid(formControlName: string): boolean {
    const control = this.getCamionControl(formControlName);
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArchivoServiceService } from 'src/app/services/archivo-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit {
  datosViaje: FormGroup;
  archivoLabelText: string = '';
  selectedFile: File[] | any | null = [];

  constructor(private _formBuilder: FormBuilder,private archivoService: ArchivoServiceService, private translate: TranslateService) {
    this.datosViaje = this._formBuilder.group({
      tipoForm: 'Viajes',
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      transporte: new FormControl('', Validators.required),

      // Datos Empresa
      ahaAfipEmpresa: new FormControl('', Validators.required),
      ahaAfipArchivo: new FormControl(''),
      libreDeudaEmpresa: new FormControl('', Validators.required),
      libreDeudaArchivo: new FormControl(''),
      constanciaIIBBEmpresa: new FormControl('', Validators.required),
      constanciaIIBBArchivo: new FormControl(''),
      constanciaCBUEmpresa: new FormControl('', Validators.required),
      constanciaCBUArchivo: new FormControl(''),

      // Datos Chofer
      dniChofer: new FormControl('', Validators.required),
      dniChoferArchivo: new FormControl(''),
      licenciaChofer: new FormControl('', Validators.required),
      licenciaChoferArchivo: new FormControl(''),
      altaTempranaChofer: new FormControl('', Validators.required),
      altaTempranaChoferArchivo: new FormControl(''),
      artChofer: new FormControl('', Validators.required),
      artChoferArchivo: new FormControl(''),
      lintiChofer: new FormControl('', Validators.required),
      lintiChoferArchivo: new FormControl(''),
      seguroVidaChofer: new FormControl('', Validators.required),
      seguroVidaChoferArchivo: new FormControl(''),

      // Datos Camion
      rtoCamion: new FormControl('', Validators.required),
      rtoArchivo: new FormControl(''),
      polizaSeguroCamion: new FormControl('', Validators.required),
      polizaSeguroArchivo: new FormControl(''),
      pasoSeguroCamion: new FormControl('', Validators.required),
      pasoSeguroArchivo: new FormControl(''),
      rutaCamion: new FormControl('', Validators.required),
      rutaCamionArchivo: new FormControl(''),
      certificadoSatelitalCamion: new FormControl('', Validators.required),
      certificadoSatelitalArchivo: new FormControl(''),
    });

    this.setupFileControl('ahaAfipEmpresa', 'ahaAfipArchivo');
    this.setupFileControl('libreDeudaEmpresa', 'libreDeudaArchivo');
    this.setupFileControl('constanciaIIBBEmpresa', 'constanciaIIBBArchivo');
    this.setupFileControl('constanciaCBUEmpresa', 'constanciaCBUArchivo');
    this.setupFileControl('dniChofer', 'dniChoferArchivo');
    this.setupFileControl('licenciaChofer', 'licenciaChoferArchivo');
    this.setupFileControl('altaTempranaChofer', 'altaTempranaChoferArchivo');
    this.setupFileControl('artChofer', 'artChoferArchivo');
    this.setupFileControl('lintiChofer', 'lintiChoferArchivo');
    this.setupFileControl('seguroVidaChofer', 'seguroVidaChoferArchivo');
    this.setupFileControl('rtoCamion', 'rtoArchivo');
    this.setupFileControl('polizaSeguroCamion', 'polizaSeguroArchivo');
    this.setupFileControl('pasoSeguroCamion', 'pasoSeguroArchivo');
    this.setupFileControl('rutaCamion', 'rutaCamionArchivo');
    this.setupFileControl('certificadoSatelitalCamion', 'certificadoSatelitalArchivo');
  }


  setupFileControl(triggerControlName: string, targetControlName: string): void {
    this.datosViaje.get(triggerControlName)?.valueChanges.subscribe(value => {
      const targetControl = this.datosViaje.get(targetControlName);

      if (value === 'Si') {
        targetControl?.setValidators([Validators.required]);
      } else {
        targetControl?.clearValidators();
      }

      targetControl?.updateValueAndValidity();
    });
  }

  

  ngOnInit(): void {}

  getControl(formControlName: string) {
    return this.datosViaje.controls[formControlName];
  }

  isFormControlInvalid(formControlName: string): boolean {
    const control = this.getControl(formControlName);
    return control.invalid && (control.dirty || control.touched);
  }

  async submitForm() {
    if (this.datosViaje.valid) {

      const archivosPDF = this.selectedFile;


      const datosFormulario = this.datosViaje.value;
      console.log(datosFormulario)
      this.archivoService.enviarArchivosYDatos( datosFormulario, archivosPDF )
      .subscribe(
        (respuesta) => {
          console.log('Éxito:', respuesta);
          alert('Mensaje enviado');
          this.datosViaje.reset();
        },
        (error) => {
          console.error('Error:', error);
          alert('Error al enviar el mensaje');
        }
      );
    } else {
      this.datosViaje.markAllAsTouched();
    }
  }

  onFileSelected(event: any): void {
    const archivoInput = event.target as HTMLInputElement;

    if (archivoInput?.files?.length) {
      // Agregar los nuevos archivos a la lista existente
      this.selectedFile = this.selectedFile.concat(Array.from(archivoInput.files));
      this.archivoLabelText = this.selectedFile.map((file: { name: any; }) => file.name).join(', ');
    } else {
      this.selectedFile = [];
      this.archivoLabelText = '';
    }
  }
}

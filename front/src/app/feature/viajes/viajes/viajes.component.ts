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
  
  archivosPorCampo: { [campo: string]: File[] } = {
    ahaAfipEmpresa: [],
    libreDeudaEmpresa: [],
    constanciaIIBBEmpresa: [],
    constanciaCBUEmpresa: [],
    dniChofer: [],
    licenciaChofer: [],
    altaTempranaChofer: [],
    artChofer: [],
    lintiChofer: [],
    seguroVidaChofer: [],
    rtoCamion: [],
    polizaSeguroCamion: [],
    pasoSeguroCamion: [],
    rutaCamion: [],
    certificadoSatelitalCamion: [],
  };  
  archivoLabelTextAfip: string = '';
  archivoLabelTextLibreDeuda: string = '';
  archivoLabelTextIIBB: string = '';
  archivoLabelTextCBU: string = '';
  archivoLabelTextDniChofer: string = '';
  archivoLabelTextLicenciaChofer: string = '';
  archivoLabelTextAltaTempranaChofer: string = '';
  archivoLabelTextArtChofer: string = '';
  archivoLabelTextLintiChofer: string = '';
  archivoLabelTextSeguroVidaChofer: string = '';
  archivoLabelTextRtoCamion: string = '';
  archivoLabelTextPolizaSeguroCamion: string = '';
  archivoLabelTextPasoSeguroCamion: string = '';
  archivoLabelTextRutaCamion: string = '';
  archivoLabelTextCertificadoSatelitalCamion: string = '';

  cargando: boolean = false;
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

    this.setupFileControl('ahaAfipEmpresa', 'ahaAfipArchivo', 'archivoLabelTextAfip');
    this.setupFileControl('libreDeudaEmpresa', 'libreDeudaArchivo', 'archivoLabelTextLibreDeuda');
    this.setupFileControl('constanciaIIBBEmpresa', 'constanciaIIBBArchivo', 'archivoLabelTextIIBB');
    this.setupFileControl('constanciaCBUEmpresa', 'constanciaCBUArchivo', 'archivoLabelTextCBU');
    this.setupFileControl('dniChofer', 'dniChoferArchivo', 'archivoLabelTextDniChofer');
    this.setupFileControl('licenciaChofer', 'licenciaChoferArchivo', 'archivoLabelTextLicenciaChofer');
    this.setupFileControl('altaTempranaChofer', 'altaTempranaChoferArchivo', 'archivoLabelTextAltaTempranaChofer');
    this.setupFileControl('artChofer', 'artChoferArchivo', 'archivoLabelTextArtChofer');
    this.setupFileControl('lintiChofer', 'lintiChoferArchivo', 'archivoLabelTextLintiChofer');
    this.setupFileControl('seguroVidaChofer', 'seguroVidaChoferArchivo', 'archivoLabelTextSeguroVidaChofer');
    this.setupFileControl('rtoCamion', 'rtoArchivo', 'archivoLabelTextRtoCamion');
    this.setupFileControl('polizaSeguroCamion', 'polizaSeguroArchivo', 'archivoLabelTextPolizaSeguroCamion');
    this.setupFileControl('pasoSeguroCamion', 'pasoSeguroArchivo', 'archivoLabelTextPasoSeguroCamion');
    this.setupFileControl('rutaCamion', 'rutaCamionArchivo', 'archivoLabelTextRutaCamion');
    this.setupFileControl('certificadoSatelitalCamion', 'certificadoSatelitalArchivo', 'archivoLabelTextCertificadoSatelitalCamion');
    
  }


setupFileControl(triggerControlName: string, targetControlName: string, archivoLabelTextVariable: string): void {
  this.datosViaje.get(triggerControlName)?.valueChanges.subscribe(value => {
    const targetControl = this.datosViaje.get(targetControlName);
    const campoPrefix = triggerControlName.includes('Empresa') ? 'Empresa' : (triggerControlName.includes('Chofer') ? 'Chofer' : 'Camion');
    if (value === 'Si') {
      // Si se selecciona "Si", validar si hay archivos subidos
      const archivosSubidos = this.archivosPorCampo[campoPrefix].length > 0;
    
      if (!archivosSubidos) {
        targetControl?.setValidators([Validators.required]);
      } else {
        targetControl?.clearValidators();
      }
    } else {
      // Si se selecciona "No", limpiar validadores y archivos
      targetControl?.clearValidators();
      this.eliminarArchivos(targetControlName, archivoLabelTextVariable);
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
      this.cargando = true; // Inicia la señal de carga
  
      // Extraer todos los archivos en un solo array
      const archivosPDF = Object.values(this.archivosPorCampo).flat();
      
      const datosFormulario = this.datosViaje.value;
      console.log(datosFormulario);
  
      this.archivoService.enviarArchivosYDatos(datosFormulario, archivosPDF)
        .subscribe(
          (respuesta) => {
            console.log('Éxito:', respuesta);
            alert('Mensaje enviado');
  
            // Resetear el formulario
            this.datosViaje.reset();
  
            // Limpiar archivosPorCampo y archivoLabelText
            this.limpiarArchivosYLabels();
          },
          (error) => {
            console.error('Error:', error);
            alert('Error al enviar el mensaje');
          }
        )
        .add(() => {
          this.cargando = false; // Finaliza la señal de carga, independientemente del éxito o error
        });
    } else {
      this.datosViaje.markAllAsTouched();
    }
  }
  
  
  limpiarArchivosYLabels(): void {
    // Limpiar archivosPorCampo
    for (const key in this.archivosPorCampo) {
      if (this.archivosPorCampo.hasOwnProperty(key)) {
        this.archivosPorCampo[key] = [];
      }
    }
  
    // Limpiar archivoLabelText
    for (const key in this) {
      if (this.hasOwnProperty(key) && key.startsWith('archivoLabelText')) {
        (this as Record<string, any>)[key] = '';
      }
    }
  }

  onFileSelected(event: any, archivoLabelTextVariable: string, campo: string): void {
    const archivoInput = event.target as HTMLInputElement;
  
    if (archivoInput?.files?.length) {
      const selectedFiles = Array.from(archivoInput.files);
  
      // Almacenar los archivos en el arreglo correspondiente al campo
      this.archivosPorCampo[campo] = (this.archivosPorCampo[campo] || []).concat(selectedFiles);
  
      // Actualizar la labelText con los nombres de los archivos
      const existingFiles = this.archivosPorCampo[campo].map((file: { name: any; }) => file.name).join(', ');
      (this as any)[archivoLabelTextVariable] = existingFiles ? existingFiles + ', ' : '';
  
      // Actualizar el valor del control en el formulario
      const archivoControl = this.datosViaje.get(`${campo.replace('Empresa', '')}Archivo`);
      if (archivoControl) {
        archivoControl.setValue(this.archivosPorCampo[campo]);
      }
    }
  }
  
eliminarArchivos(campo: string, archivoLabelTextVariable: string): void {
  // Limpiar el arreglo de archivos correspondiente al campo
  this.archivosPorCampo[campo] = [];

  // Limpiar el valor del control en el formulario
  const archivoControl = this.datosViaje.get(`${campo.replace('Empresa', '')}Archivo`);
  if (archivoControl) {
    archivoControl.setValue([]);
  }

  // Limpiar la labelText
  (this as any)[archivoLabelTextVariable] = '';
}
  

  
}
//---------------------------

//-----------------------------
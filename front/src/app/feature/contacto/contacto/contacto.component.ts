import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { ArchivoServiceService } from 'src/app/services/archivo-service.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit{
  portadaData = {
    videoSrc: '../../../../assets/videos/video2.mp4',
    titulo: 'Contactanos',
    texto: ''
  };

  clienteForm: FormGroup;
  proveedorForm: FormGroup;
  cvForm: FormGroup;
  formularioActual: string = "cliente";
  archivoLabelText: string = 'Selecciona un archivo';
  selectedFile: File[] | any | null = [];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, public translate: TranslateService, private archivoService: ArchivoServiceService) {
    this.clienteForm = this.fb.group({
      tipoForm: 'Cliente', 
      apellido: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      empresa: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required),
      cuit: new FormControl('', Validators.required),
      servicios: new FormControl('', Validators.required),
      texto: new FormControl(''),
    });
  
    this.proveedorForm = this.fb.group({
      tipoForm: 'Proveedor', 
      apellido: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      empresa: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required),
      cuit: new FormControl('', Validators.required),
      servicios: new FormControl('', Validators.required),
      texto: new FormControl(''),
    });
  
    this.cvForm = this.fb.group({
      tipoForm: 'Postulante', 
      apellido: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      empresa: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required),
      profesion: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      archivo: new FormControl('', Validators.required),
    });
  }
  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const formulario = params['formulario'];
      this.mostrarForm(formulario);
    });
  
    this.translate.onLangChange.subscribe(() => {
      this.updateText();
    });
  
    this.updateText();
  }
  
  onFileSelected(event: any): void {
    const archivoInput = event.target as HTMLInputElement;

    if (archivoInput?.files?.length && archivoInput.files[0]) {
      // Se cargó un archivo
      const primerArchivo = archivoInput.files[0];
      this.selectedFile = primerArchivo;
      this.archivoLabelText = `Archivo cargado: ${primerArchivo?.name || 'Desconocido'}`;
    } else {
      // No se cargó ningún archivo
      this.selectedFile = null;
      this.archivoLabelText = '';
    }
  }

  getControlCliente(formControlName: string) {
    return this.clienteForm.controls[formControlName];
  }

  getControlProveedor(formControlName: string) {
    return this.proveedorForm.controls[formControlName];
  }
  getControlPostulante(formControlName: string) {
    return this.cvForm.controls[formControlName];
  }
  

  printForm(form: FormGroup): void {
    if(form.valid){
      console.log(form.value);
      form.reset();
    }
    else {
      form.markAllAsTouched();
    }
  }

  
  mostrarForm(formulario: string): void {
    this.formularioActual = formulario || 'cliente'; // Valor por defecto o cuando el parámetro es nulo
  }

  private updateText(): void {
    this.translate.get('contactoLabelText').subscribe((title: string) => {
      this.archivoLabelText = title;
    });
    this.translate.get('contacto-portada-titulo').subscribe((description: string) => {
      this.portadaData.titulo = description;
    });
    
  }

async enviarCliente(){
  if(this.clienteForm.valid){
    const formCliente = this.clienteForm.value;
    console.log(formCliente);
    this.archivoService.enviarDatosCliente(formCliente).subscribe(
    (respuesta) => {
      console.log('Exito: ', respuesta);
      alert('Datos enviados!');
      this.clienteForm.reset();
    },        (error) => {
      console.error('Error:', error);
      alert('Error al enviar el mensaje');
    }
  );

  }  else{
    this.clienteForm.markAllAsTouched();
  }
}

async enviarProveedor(){
  if(this.proveedorForm.valid){
    const formProveedor = this.proveedorForm.value;
    console.log(formProveedor);
    this.archivoService.enviarDatosProveedor(formProveedor).subscribe(
    (respuesta) => {
      console.log('Exito: ', respuesta);
      alert('Datos enviados!');
      this.clienteForm.reset();
    },        (error) => {
      console.error('Error:', error);
      alert('Error al enviar el mensaje');
    }
  );

  }  else{
    this.proveedorForm.markAllAsTouched();
  }
}

async enviarCV() {
  if (this.cvForm.valid) {

    if (this.selectedFile instanceof File) {
      const datosFormulario = this.cvForm.value;
      console.log('Datos del formulario:', datosFormulario);

      this.archivoService.enviarCV(datosFormulario, this.selectedFile)
        .subscribe(
          (respuesta) => {
            console.log('Éxito:', respuesta);
            alert('Mensaje enviado');
            this.cvForm.reset();
          },
          (error) => {
            console.error('Error:', error);
            alert('Error al enviar el mensaje');
          }
        );
    } else {
      alert('Selecciona un archivo PDF.');
    }
  } else {
    this.cvForm.markAllAsTouched();
  }
}

handleFileInput(event: any) {
  const archivoSeleccionado: File | null = event.target.files[0] || null;
  this.selectedFile = archivoSeleccionado;
  this.archivoLabelText = `Archivo cargado: ${archivoSeleccionado?.name || 'Desconocido'}`;
}

}

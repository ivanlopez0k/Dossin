import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit{
  portadaData = {
    videoSrc: '../../../../assets/videos/placeholder-video.mp4',
    titulo: 'Contactanos',
    texto: ''
  };

  clienteForm: FormGroup;
  proveedorForm: FormGroup;
  cvForm: FormGroup;
  formularioActual: string = "cliente";

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      apellido:['', Validators.required],
      nombre:['', Validators.required],
      empresa:['', Validators.required],
      email:['', Validators.required],
      telefono:['', Validators.required],
      texto:['', Validators.required],
    });

    this.proveedorForm = this.fb.group({
      // Definir campos para el segundo formulario
    });

    this.cvForm = this.fb.group({
      // Definir campos para el segundo formulario
    });
  }

  ngOnInit(): void {
    
  }
  
  printForm(form: FormGroup): void {
    console.log(form.value);
  }

  // Método para mostrar el formulario correspondiente al selector-item seleccionado
  mostrarForm(formulario: string): void {
    this.formularioActual = formulario;
  }
}

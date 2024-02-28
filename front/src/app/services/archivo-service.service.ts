import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ArchivoConNombreCampo {
  archivo: File;
  nombreCampo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArchivoServiceService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000';

  enviarArchivosYDatos(datosFormulario: any, archivosPDF: ArchivoConNombreCampo[]): Observable<any> {
    const formData = new FormData();
    Object.keys(datosFormulario).forEach(key => {
      formData.append(key, datosFormulario[key]);
    });
  
    archivosPDF.forEach((archivoConNombre, index) => {
      const extension = this.obtenerExtensionDesdeTipo(archivoConNombre.archivo.type);
      const nuevoNombreCampo = `${archivoConNombre.nombreCampo}.${extension}`;
      formData.append('archivosPDF', archivoConNombre.archivo, nuevoNombreCampo);
    });
  
    const url = `${this.apiUrl}/viajes`;
    const httpOptions = {
      headers: new HttpHeaders({}),
      withCredentials: true,
    };
  
    return this.http.post(url, formData, httpOptions);
  }

  obtenerExtensionDesdeTipo(tipoArchivo: string): string {
    switch (tipoArchivo) {
      case 'application/pdf':
        return 'pdf';
      case 'image/jpeg':
        return 'jpg';
      case 'image/png':
        return 'png';
      default:
        return 'unknown';
    }
  }

enviarDatosCliente(formCliente: any): Observable<any>{
  const url = `${this.apiUrl}/contacto-cliente`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  };
  // const formData = new FormData();
  // Object.keys(formCliente).forEach(key => {
  //   formData.append(key, formCliente[key]);
  // });

return this.http.post(url, formCliente, httpOptions )
}

enviarDatosProveedor(formCliente: any): Observable<any>{
  const url = `${this.apiUrl}/contacto-proveedor`;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  };
  // const formData = new FormData();
  // Object.keys(formCliente).forEach(key => {
  //   formData.append(key, formCliente[key]);
  // });

return this.http.post(url, formCliente, httpOptions )
}

enviarCV(formCV: any, archivoPDF: File): Observable<any> {
  const formData = new FormData();
  
  if (archivoPDF instanceof File) {
    formData.append('archivoPDF', archivoPDF);
  }

  Object.keys(formCV).forEach(key => {
    formData.append(key, formCV[key]);
  });

  const url = `${this.apiUrl}/cv`;
  const httpOptions = {
    headers: new HttpHeaders({

    }),
    withCredentials: true,
  };

  return this.http.post(url, formData, httpOptions);
}

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivoServiceService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://dossin-backend.vercel.app';
  enviarArchivosYDatos( datosFormulario: any, archivosPDF:File[]): Observable<any> {

    const formData = new FormData();
    Object.keys(datosFormulario).forEach(key => {
      formData.append(key, datosFormulario[key]);
    });

    archivosPDF.forEach((archivo, index) => {
      formData.append('archivosPDF', archivo);
    });

    console.log(formData.getAll('nombre'));

    const url = `${this.apiUrl}/viajes`;
const httpOptions = {
  headers: new HttpHeaders({

  }),
  withCredentials: true,  
};
    
    return this.http.post(url, formData, httpOptions);
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

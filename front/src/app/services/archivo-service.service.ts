import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivoServiceService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000';
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
  withCredentials: true,  // Ajusta esto según tus necesidades, especialmente si estás trabajando con CORS.
};
    
    return this.http.post(url, formData, httpOptions);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-industrias',
  templateUrl: './industrias.component.html',
  styleUrls: ['./industrias.component.scss']
})
export class IndustriasComponent {
  industriaData = [
    {
      cardTitle: 'Agricola',
      cardImg: 'https://rigar.com.ar/wp-content/uploads/2019/05/camion-semi-remolque-01-1024x725.png',
      cardDesc: 'La industria del campo es el mayor complejo exportador en la Argentina. Nosotros transportamos los granos que se producen en la región pampeana para que puedan ser despachados a mercados internacionales en los puertos de Rosario o Buenos Aires. ',
    },
    {
      cardTitle: 'Mineria',
      cardImg: 'https://rigar.com.ar/wp-content/uploads/2019/05/camion-semi-remolque-01-1024x725.png',
      cardDesc: 'Una operación minera eficiente requiere de una gran capacidad carga y una flota moderna que sea capaz de cumplir con las exigencias de seguridad, sostenibilidad y cuidado del medio ambiente que son cada vez más frecuentes en la industria minera. Pero así también de soluciones logísticas de avanzada que le permitan a las empresas reducir sus costos para adaptarse a los nuevos parámetros del mercado.',
    },
    {
      cardTitle: 'Mercaderias',
      cardImg: 'https://rigar.com.ar/wp-content/uploads/2019/05/camion-semi-remolque-01-1024x725.png',
      cardDesc: 'La industria manufacturera produce una amplia variedad de bienes intermedios y finales. La entrega segura y puntual de estos bienes es fundamental para la continuidad y la rentabilidad de cada empresa. En Rigar manejamos eficientemente los envíos regulares, pequeños o grandes.',
    },
    {
      cardTitle: 'Construccion',
      cardImg: 'https://rigar.com.ar/wp-content/uploads/2019/05/camion-semi-remolque-01-1024x725.png',
      cardDesc: 'Las limitaciones de capacidad de los camiones, la complejidad del sistema logístico, y las normas seguridad son sólo algunos de los desafíos que se presentan para las empresas de la industria de la construcción. En Rigar le ayudamos a superar estas complejidades con una red optimizada de transporte y logística que incluye equipo y manejo especializados, conductores capacitados, ingeniería de rutas, soporte administrativo y tecnología innovadora.',
    },
    {
      cardTitle: 'Alimentos y Bebidas',
      cardImg: 'https://rigar.com.ar/wp-content/uploads/2019/05/camion-semi-remolque-01-1024x725.png',
      cardDesc: 'Manejamos y almacenamos todo tipo de productos de alimentos y bebidas no perecederos y no refrigerados. Nuestras instalaciones y equipos se mantienen limpios y todos los alimentos se tratan de forma higiénica y de acuerdo con las normas y regulaciones de la industria durante la carga y el transporte.',
    }
  ];
}

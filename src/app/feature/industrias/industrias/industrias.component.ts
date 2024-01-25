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
      cardImg: '../../../../assets/logos/industrias/agronomia.png',
      cardDesc: 'La industria del campo es el mayor complejo exportador en la Argentina. Nosotros transportamos los granos que se producen en la región pampeana para que puedan ser despachados a mercados internacionales en los puertos de Rosario o Buenos Aires. ',
    },
    {
      cardTitle: 'Mineria',
      cardImg: '../../../../assets/logos/industrias/mineria.png',
      cardDesc: 'Una operación minera eficiente requiere de una gran capacidad carga y una flota moderna que sea capaz de cumplir con las exigencias de seguridad, sostenibilidad y cuidado del medio ambiente que son cada vez más frecuentes en la industria minera. Pero así también de soluciones logísticas de avanzada que le permitan a las empresas reducir sus costos para adaptarse a los nuevos parámetros del mercado.',
    },
    {
      cardTitle: 'Mercaderias',
      cardImg: '../../../../assets/logos/industrias/mercaderia.png',
      cardDesc: 'La industria manufacturera produce una amplia variedad de bienes intermedios y finales. La entrega segura y puntual de estos bienes es fundamental para la continuidad y la rentabilidad de cada empresa. En Rigar manejamos eficientemente los envíos regulares, pequeños o grandes.',
    },
    {
      cardTitle: 'Construccion',
      cardImg: '../../../../assets/logos/industrias/construccion.png',
      cardDesc: 'Las limitaciones de capacidad de los camiones, la complejidad del sistema logístico, y las normas seguridad son sólo algunos de los desafíos que se presentan para las empresas de la industria de la construcción. En Rigar le ayudamos a superar estas complejidades con una red optimizada de transporte y logística que incluye equipo y manejo especializados, conductores capacitados, ingeniería de rutas, soporte administrativo y tecnología innovadora.',
    },
    {
      cardTitle: 'Alimentos y Bebidas',
      cardImg: '../../../../assets/logos/industrias/alimentos.png',
      cardDesc: 'Manejamos y almacenamos todo tipo de productos de alimentos y bebidas no perecederos y no refrigerados. Nuestras instalaciones y equipos se mantienen limpios y todos los alimentos se tratan de forma higiénica y de acuerdo con las normas y regulaciones de la industria durante la carga y el transporte.',
    }
  ];

  empresasData = [
    {
      empTitle: 'AGD',
      empLogo: '../../../../assets/images/clientes/AGD.jpg',
    },
    {
      empTitle: 'ARAUCO',
      empLogo: '../../../../assets/images/clientes/ARAUCO.jpg',
    },
    {
      empTitle: 'BUNGE',
      empLogo: '../../../../assets/images/clientes/BUNGE.jpg',
    },
    {
      empTitle: 'Cadewor',
      empLogo: '../../../../assets/images/clientes/cadewor.jpg',
    },
    {
      empTitle: 'CEFAS',
      empLogo: '../../../assets/images/clientes/CEFAS.jpg',
    },
    {
      empTitle: 'CONCI',
      empLogo: '../../../assets/images/clientes/Conci.jpg',
    },
    {
      empTitle: 'Glucovil',
      empLogo: '../../../assets/images/clientes/Glucovil.jpg',
    },
    {
      empTitle: 'Minera Aguilar',
      empLogo: '../../../assets/images/clientes/minera-aguilar.jpg',
    },
    {
      empTitle: 'Molinos Agro',
      empLogo: '../../../assets/images/clientes/Molinos-Agro.jpg',
    },
    {
      empTitle: 'SER BEEF',
      empLogo: '../../../assets/images/clientes/SER-beef.jpg',
    },
    {
      empTitle: 'Sinerlogic',
      empLogo: '../../../assets/images/clientes/sinerlogic.jpg',
    },
    {
      empTitle: 'Superblock',
      empLogo: '../../../assets/images/clientes/superblock.jpg',
    },
    {
      empTitle: 'Vicentin S.A.I.C',
      empLogo: '../../../assets/images/clientes/vicentin-saic.jpg',
    },
    {
      empTitle: 'VIEL',
      empLogo: '../../../assets/images/clientes/viel.jpg',
    },
  ];

  portadaData = {
    videoSrc: '../../../../assets/videos/placeholder-video.mp4',
    titulo: 'Industrias',
    texto: 'Tenemos experiencia en diversos rubros industriales'
  };
}

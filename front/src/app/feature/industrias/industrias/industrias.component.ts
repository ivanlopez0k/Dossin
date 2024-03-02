import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-industrias',
  templateUrl: './industrias.component.html',
  styleUrls: ['./industrias.component.scss']
})
export class IndustriasComponent implements OnInit {
  industriaData = [
    {
      cardTitle: 'Agrícola',
      cardImg: '../../../../assets/logos/industrias/agronomia.png',
      cardDesc: 'En el sector agrícola, Dossin se especializa en el transporte seguro y eficiente de commodities y especialidades, maquinaria del agro e insumos. Nuestra flota y experiencia garantizan el manejo cuidadoso de grandes volúmenes de carga, contribuyendo al éxito de los agricultores y empresas del sector.',
    },
    {
      cardTitle: 'Mineria',
      cardImg: '../../../../assets/logos/industrias/mineria.png',
      cardDesc: 'Colaboramos estrechamente con la industria minera para proporcionar soluciones logísticas adaptadas a sus necesidades únicas. Manejamos el transporte de derivados mineros y movimientos sobredimensionados e especiales con la eficiencia necesaria para mantener las operaciones mineras en marcha.',
    },
    {
      cardTitle: 'Mercaderias',
      cardImg: '../../../../assets/logos/industrias/mercaderia.png',
      cardDesc: 'Dossin ofrece servicios de transporte para una amplia variedad de mercancías, abarcando desde productos manufacturados hasta bienes de consumo. Adaptamos nuestras soluciones logísticas para garantizar entregas puntuales y eficientes, satisfaciendo las demandas dinámicas de cada industria.',
    },
    {
      cardTitle: 'Construccion',
      cardImg: '../../../../assets/logos/industrias/construccion.png',
      cardDesc: 'En el sector de la construcción, proporcionamos servicios logísticos especializados para el transporte de materiales de construcción, equipos pesados y otros elementos necesarios para proyectos de construcción. Nuestra flota versátil y experiencia nos permiten enfrentar los desafíos específicos de esta industria.',
    },
    {
      cardTitle: 'Alimentos y Bebidas',
      cardImg: '../../../../assets/logos/industrias/alimentos.png',
      cardDesc: 'Dossin se destaca en el manejo de productos alimenticios y bebidas, garantizando un transporte seguro y cumpliendo con los requisitos normativos. Nos comprometemos a mantener la frescura e integridad de los productos, asegurando entregas eficientes a lo largo de la cadena de suministro.',
    }
  ];

  empresasData = [
    {
      empTitle: 'AGD',
      empLogo: '../../../../assets/images/clientes/AGD.jpg',
    },
    {
      empTitle: 'ARAUCO',
      empLogo: '../../../../assets/images/clientes/arauco.png',
    },
    {
      empTitle: 'BUNGE',
      empLogo: '../../../../assets/images/clientes/Bunge.webp',
    },
    {
      empTitle: 'Cadewor',
      empLogo: '../../../../assets/images/clientes/Cadewor.webp',
    },
    {
      empTitle: 'CEFAS',
      empLogo: '../../../assets/images/clientes/CEFAS.jpg',
    },
    {
      empTitle: 'CONCI',
      empLogo: '../../../assets/images/clientes/CONCI.webp',
    },
    {
      empTitle: 'Glucovil',
      empLogo: '../../../assets/images/clientes/Glucovil.webp',
    },
    {
      empTitle: 'Minera Aguilar',
      empLogo: '../../../assets/images/clientes/minera-aguilar.jpg',
    },
    {
      empTitle: 'Molinos Agro',
      empLogo: '../../../assets/images/clientes/molinos agro.png',
    },
    {
      empTitle: 'SER BEEF',
      empLogo: '../../../assets/images/clientes/serbeef.png',
    },
    {
      empTitle: 'Sinerlogic',
      empLogo: '../../../assets/images/clientes/sinerlogic.jpg',
    },
    {
      empTitle: 'Superblock',
      empLogo: '../../../assets/images/clientes/super.png',
    },
    {
      empTitle: 'Vicentin S.A.I.C',
      empLogo: '../../../assets/images/clientes/Vicentin.webp ',
    },
    {
      empTitle: 'VIEL',
      empLogo: '../../../assets/images/clientes/viel.png',
    },
  ];

  portadaData = {
    videoSrc: '../../../../assets/videos/video2.mp4',
    titulo: '',
    texto: ''
  };

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.updateTitles();
    });

    this.updateTitles();
  }

  private updateTitles(): void {
    this.translate.get('industrias-portada-titulo').subscribe((title: string) => {
      this.portadaData.titulo = title;
    });

    this.translate.get('industrias-portada-texto').subscribe((description: string) => {
      this.portadaData.texto = description;
    });
    this.translate.get('industrias-agricola-titulo').subscribe((title: string) => {
      this.industriaData[0].cardTitle = title;
    });
    this.translate.get('industrias-agricola-text').subscribe((title: string) => {
      this.industriaData[0].cardDesc = title;
    });
    this.translate.get('industrias-mineria-titulo').subscribe((title: string) => {
      this.industriaData[1].cardTitle = title;
    });
    this.translate.get('industrias-mineria-text').subscribe((title: string) => {
      this.industriaData[1].cardDesc = title;
    });
    this.translate.get('industrias-mercaderias-titulo').subscribe((title: string) => {
      this.industriaData[2].cardTitle = title;
    });
    this.translate.get('industrias-mercaderias-text').subscribe((title: string) => {
      this.industriaData[2].cardDesc = title;
    });
    this.translate.get('industrias-construccion-titulo').subscribe((title: string) => {
      this.industriaData[3].cardTitle = title;
    });
    this.translate.get('industrias-construccion-text').subscribe((title: string) => {
      this.industriaData[3].cardDesc = title;
    });

    this.translate.get('industrias-alimentos-titulo').subscribe((title: string) => {
      this.industriaData[4].cardTitle = title;
    });
    this.translate.get('industrias-alimentos-text').subscribe((title: string) => {
      this.industriaData[4].cardDesc = title;
    });


  }
}

import EurotransIcon from '../components/icons/EurotransIcon'
import GeniallyIcon from '../components/icons/GeniallyIcon'
import SopinetIcon from '../components/icons/SopinetIcon'
import WealizeIcon from '../components/icons/WealizeIcon'
import { colors } from '../theme/color'

export const jobs = [
  {
    title: 'Frontend Developer',
    dates: '07/2021 - Actualidad',
    place: 'Genially',
    url: 'https://www.genial.ly/',
    city: 'Córdoba, España (Remoto)',
    icon: GeniallyIcon,
    cardColor: colors.geniallyGradient,
    iconBackground: colors.geniallyGradient,
    iconShadow: colors.geniallyPrimary
  },
  {
    title: 'Software Engineer',
    dates: '07/2019 - 06/2021',
    place: 'Wealize',
    url: 'https://wealize.digital/',
    city: 'Córdoba, España (Remoto)',
    icon: WealizeIcon,
    cardColor: colors.wealizeSecondary,
    iconBackground: colors.wealizeSecondary,
    iconShadow: colors.wealizePrimary,
    abilities: [
      'Creación de interfaces de usuario usando <b>Typescript, Reactjs/Nextjs, Styled components, SWR, SSR</b>.',
      'Utilización de sistemas de diseño como <b>Ant.design</b> o <b>Carbon design system</b>.',
      'Realización de pruebas de control de calidad para descubrir errores y optimizar la usabilidad con <b>Cypress y tests unitarios</b>.',
      'Generación y envío de tokens en blockchain usando <b>Smart Contracts</b>.',
      'Creación de <b>API REST</b> con <b>Python+Django</b>.',
      'Implementación de sistemas de pago con <b>Stripe</b> y <b>PayPal</b>.',
      'Implementación de CI/CD con <b>GithubActions</b> o <b>CircleCI</b>.',
      'Uso de contenedores con <b>Docker/Docker-compose</b> y despliegue en <b>Heroku</b>.',
      'Control de versiones con <b>Git</b> y <b>Github</b>.',
      '<b>Clean code</b>',
      '<b>Clean architecture</b>'
    ]
  },
  {
    title: 'Web Developer',
    dates: '06/2018 - 07/2019',
    place: 'Eurotransportcar',
    url: 'https://www.eurotransportcar.com/',
    city: 'Córdoba, España',
    icon: EurotransIcon,
    cardColor: colors.eurotransPrimary,
    iconBackground: colors.eurotransBackground,
    iconShadow: colors.eurotransPrimary,
    abilities: [
      'Diseño y creación de interfaces para nuevas funcionalidades con <bClean>Symfony + Twig + Bootstrap</bClean>.',
      'Creación de API Rest con <b>Symfony</b>.',
      'JQuery.',
      'Refactor de código monolítico.',
      'Despliegue a producción en VPS.',
      'Automatización de tareas del servidor con <b>Bash</b>.',
      'Creación de consultas complejas con <b>SQL</b>.'
    ]
  },
  {
    title: 'Web Developer en prácticas',
    dates: '03/2018 - 06/2018',
    place: 'Sopinet Software',
    url: 'https://sopinet.com/',
    city: 'Córdoba, España',
    icon: SopinetIcon,
    cardColor: colors.sopinetPrimary,
    iconBackground: colors.sopinetBackground,
    iconShadow: colors.sopinetPrimary,
    abilities: [
      'Creación de interfaces para herramientas internas de la empresa con <b>Symfony+Twig</b>.',
      'Creación de <b>API Rest</b> con <b>Symfony</b>',
      'Creación y mantenimiento de un bot de telegram hecho con Symfony.'
    ]
  }
]

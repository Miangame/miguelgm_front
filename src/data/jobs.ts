import EurotransIcon from '../icons/EurotransIcon'
import GeniallyIcon from '../icons/GeniallyIcon'
import SopinetIcon from '../icons/SopinetIcon'
import WealizeIcon from '../icons/WealizeIcon'
import { colors } from '../theme/color'

export const jobs = [
  {
    title: 'frontend_developer',
    dates: '07/2021 - Actualidad',
    place: 'Genially',
    url: 'https://genial.ly/',
    city: 'Córdoba, España',
    remote: true,
    icon: GeniallyIcon,
    cardColor: colors.geniallyGradient,
    iconBackground: colors.geniallyGradient,
    iconShadow: colors.geniallyPrimary
  },
  {
    title: 'software_engineer',
    dates: '07/2019 - 06/2021',
    place: 'Wealize',
    url: 'https://wealize.digital/',
    city: 'Córdoba, España',
    remote: true,
    icon: WealizeIcon,
    cardColor: colors.wealizeSecondary,
    iconBackground: colors.wealizeSecondary,
    iconShadow: colors.wealizePrimary,
    abilities: [
      'Creación de interfaces de usuario usando <strong>Typescript, Reactjs/Nextjs, Styled components, SWR, SSR</strong>.',
      'Utilización de sistemas de diseño como <strong>Ant.design</strong> o <strong>Carbon design system</strong>.',
      'Realización de pruebas de control de calidad para descubrir errores y optimizar la usabilidad con <strong>Cypress y tests unitarios</strong>.',
      'Generación y envío de tokens en blockchain usando <strong>Smart Contracts</strong>.',
      'Creación de <strong>API REST</strong> con <strong>Python+Django</strong>.',
      'Implementación de sistemas de pago con <strong>Stripe</strong> y <strong>PayPal</strong>.',
      'Implementación de CI/CD con <strong>GithubActions</strong> o <strong>CircleCI</strong>.',
      'Uso de contenedores con <strong>Docker/Docker-compose</strong> y despliegue en <strong>Heroku</strong>.',
      'Control de versiones con <strong>Git</strong> y <strong>Github</strong>.',
      '<strong>Clean code</strong>',
      '<strong>Clean architecture</strong>'
    ]
  },
  {
    title: 'web_developer',
    dates: '06/2018 - 07/2019',
    place: 'Eurotransportcar',
    remote: false,
    url: 'https://www.eurotransportcar.com/',
    city: 'Córdoba, España',
    icon: EurotransIcon,
    cardColor: colors.eurotransPrimary,
    iconBackground: colors.eurotransBackground,
    iconShadow: colors.eurotransPrimary,
    abilities: [
      'Diseño y creación de interfaces para nuevas funcionalidades con <bClean>Symfony + Twig + Bootstrap</bClean>.',
      'Creación de API Rest con <strong>Symfony</strong>.',
      'JQuery.',
      'Refactor de código monolítico.',
      'Despliegue a producción en VPS.',
      'Automatización de tareas del servidor con <strong>Bash</strong>.',
      'Creación de consultas complejas con <strong>SQL</strong>.'
    ]
  },
  {
    title: 'trainee_web_developer',
    dates: '03/2018 - 06/2018',
    place: 'Sopinet Software',
    url: 'https://sopinet.com/',
    city: 'Córdoba, España',
    remote: false,
    icon: SopinetIcon,
    cardColor: colors.sopinetPrimary,
    iconBackground: colors.sopinetBackground,
    iconShadow: colors.sopinetPrimary,
    abilities: [
      'Creación de interfaces para herramientas internas de la empresa con <strong>Symfony+Twig</strong>.',
      'Creación de <strong>API Rest</strong> con <strong>Symfony</strong>',
      'Creación y mantenimiento de un bot de telegram hecho con Symfony.'
    ]
  }
]

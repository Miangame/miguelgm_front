import EurotransIcon from '../icons/EurotransIcon'
import GeniallyIcon from '../icons/GeniallyIcon'
import SopinetIcon from '../icons/SopinetIcon'
import WealizeIcon from '../icons/WealizeIcon'
import { colors } from '../theme/color'

export const jobs = [
  {
    title: 'frontend_developer',
    dateFrom: '07/2021',
    dateTo: 'present',
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
    dateFrom: '07/2019',
    dateTo: '06/2021',
    place: 'Wealize',
    url: 'https://wealize.digital/',
    city: 'Córdoba, España',
    remote: true,
    icon: WealizeIcon,
    cardColor: colors.wealizeSecondary,
    iconBackground: colors.wealizeSecondary,
    iconShadow: colors.wealizePrimary,
    abilities: [
      'wealize_abilities.interfaces_creation',
      'wealize_abilities.design_systems',
      'wealize_abilities.tests',
      'wealize_abilities.tokens',
      'wealize_abilities.api_rest',
      'wealize_abilities.payments',
      'wealize_abilities.ci_cd',
      'wealize_abilities.docker',
      'wealize_abilities.version_control',
      'wealize_abilities.clean_code',
      'wealize_abilities.clean_architecture'
    ]
  },
  {
    title: 'web_developer',
    dateFrom: '06/2018',
    dateTo: '07/2019',
    place: 'Eurotransportcar',
    remote: false,
    url: 'https://www.eurotransportcar.com/',
    city: 'Córdoba, España',
    icon: EurotransIcon,
    cardColor: colors.eurotransPrimary,
    iconBackground: colors.eurotransBackground,
    iconShadow: colors.eurotransPrimary,
    abilities: [
      'eurotrans_abilities.interfaces_creation',
      'eurotrans_abilities.api_rest',
      'eurotrans_abilities.jquery',
      'eurotrans_abilities.refactor',
      'eurotrans_abilities.vps_deploy',
      'eurotrans_abilities.bash',
      'eurotrans_abilities.sql'
    ]
  },
  {
    title: 'trainee_web_developer',
    dateFrom: '03/2018',
    dateTo: '06/2018',
    place: 'Sopinet Software',
    url: 'https://sopinet.com/',
    city: 'Córdoba, España',
    remote: false,
    icon: SopinetIcon,
    cardColor: colors.sopinetPrimary,
    iconBackground: colors.sopinetBackground,
    iconShadow: colors.sopinetPrimary,
    abilities: [
      'sopinet_abilities.interfaces_creation',
      'sopinet_abilities.api_rest',
      'sopinet_abilities.telegram_bot'
    ]
  }
]

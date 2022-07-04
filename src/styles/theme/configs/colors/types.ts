export type colorsSchema = {
  primaryDarkest: string
  primaryDark: string
  primaryBase: string
  primaryLight: string
  primaryLightest: string
  secondaryDarkest: string
  secondaryDark: string
  secondaryBase: string
  secondaryLight: string
  secondaryLightest: string
  neutralBlack: string
  neutralDarkest: string
  neutralDark: string
  neutralBase: string
  neutralLight: string
  neutralLightest: string
  neutralWhite: string
  positiveDarkest: string
  positiveDark: string
  positiveBase: string
  positiveLight: string
  positiveLightest: string
  negativeDarkest: string
  negativeDark: string
  negativeBase: string
  negativeLight: string
  negativeLightest: string
  warningDarkest: string
  warningDark: string
  warningBase: string
  warningLight: string
  warningLightest: string
}

export type colors = keyof colorsSchema

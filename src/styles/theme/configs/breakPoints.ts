import screenSizes from 'configs/screen/sizes'

const breakPoints = {
  lessThan: {
    mobile: `@media screen and (max-width: ${screenSizes.mobile}px)`,
    tablet: `@media screen and (max-width: ${screenSizes.tablet}px)`,
    desktop: `@media screen and (max-width: ${screenSizes.desktop}px)`,
    largeDesktop: `@media screen and (max-width: ${screenSizes.largeDesktop}px)`,
  },
  moreThan: {
    mobile: `@media screen and (min-width: ${screenSizes.mobile}px)`,
    tablet: `@media screen and (min-width: ${screenSizes.tablet}px)`,
    desktop: `@media screen and (min-width: ${screenSizes.desktop}px)`,
    largeDesktop: `@media screen and (min-width: ${screenSizes.largeDesktop}px)`,
  },
}

export default breakPoints

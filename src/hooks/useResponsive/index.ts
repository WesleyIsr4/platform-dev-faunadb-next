import { useEffect, useState } from 'react'
import screenSizes from 'configs/screen/sizes'

type TSizes = 'mobile' | 'tablet' | 'desktop' | 'largeDesktop'

function useResponsive() {
  const [screenType, setScreenType] = useState<TSizes>('largeDesktop')

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < screenSizes.tablet) return setScreenType('mobile')
      if (window.innerWidth < screenSizes.desktop) return setScreenType('tablet')
      if (window.innerWidth < screenSizes.largeDesktop) return setScreenType('desktop')
      if (window.innerWidth >= screenSizes.largeDesktop) return setScreenType('largeDesktop')
      return
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return {
    screenType,
    isMobile: screenType === 'mobile',
    isTablet: screenType === 'tablet',
    isDesktop: screenType === 'desktop',
    isLargeDesktop: screenType === 'largeDesktop',
    lessOrEqualThanTablet: ['mobile', 'tablet'].includes(screenType),
    lessOrEqualThanDesktop: ['mobile', 'tablet', 'desktop'].includes(screenType),
    lessOrEqualThanLargeDesktop: ['mobile', 'tablet', 'desktop', 'largeDesktop'].includes(
      screenType
    ),
  }
}

export default useResponsive

const sizes = {
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '80px',
  custom: (multi: number) => `${multi * 4}px`,
}

export default sizes

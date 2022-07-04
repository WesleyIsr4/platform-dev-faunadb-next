import '@testing-library/jest-dom'
import 'jest-styled-components'

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: () => null,
  }),
}))


window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
}))

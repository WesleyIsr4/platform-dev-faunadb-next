import { render, screen } from 'utils/test'

import Button from './index'

describe('<Button />', () => {
  it('should button match snapshot', () => {
    const { container } = render(<Button>I am a Button</Button>)

    expect(container).toMatchSnapshot()
  })

  it('should render the default button condition', () => {
    render(<Button>I am a Button</Button>)

    expect(screen.getByRole('button', { name: /I am a Button/i })).toHaveStyle({
      backgroundColor: '#5F2EEA',
      padding: '13px 24px',
      height: '56px',
      fontSize: '18px',
    })
  })

  it('Should render secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>)

    expect(screen.getByRole('button', { name: /Secondary Button/i })).toHaveStyle({
      background: 'none',
    })
  })

  it('Should render tertiary variant', () => {
    render(<Button variant="tertiary">Tertiary Button</Button>)

    expect(screen.getByRole('button', { name: /Tertiary Button/i })).toHaveStyle({
      backgroundColor: 'transparent',
      border: '1px solid #0096B7',
    })
  })

  it('Should render text variant', () => {
    render(<Button variant="text">Text Button</Button>)

    expect(screen.getByRole('button', { name: /Text Button/i })).toHaveStyle({
      background: 'none',
      border: 'none',
      fontWeight: 500,
      color: '#F1F1F1',
    })
  })
})

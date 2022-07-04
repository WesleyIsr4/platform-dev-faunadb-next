import { render, screen } from 'utils/test'

import Text from './index'

describe('<Text />', () => {
  it('should render correct color', () => {
    render(<Text color="primaryLight">Text with primary light color</Text>)

    expect(screen.queryByText('Text with primary light color')).toHaveStyle({ color: '#E4DAFF' })
  })
})

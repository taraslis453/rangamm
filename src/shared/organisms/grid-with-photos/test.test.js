import {pathParser} from './index'
import {render, screen} from '@testing-library/react'
import {GridWithPhotos} from './index'

describe('<GridWithPhotos/>', () => {
  const results = [
    {
      alt_description: 'alt description 1',
      urls: {
        small: 'https://images.small.com',
      },
    },
    {
      alt_description: 'alt description',
      urls: {
        small: 'https://images.small.com',
      },
    },
  ]
  test('Path parser result', () => {
    let result = 'https://test.com'
    let obj = {
      url: {
        regular: 'https://test.com',
      },
    }
    expect(pathParser(obj, 'url.regular')).toEqual(result)
  })
  it('should render grid with photos', () => {
    render(
      <GridWithPhotos
        urlPath='urls.small'
        altPath='alt_description'
        items={results}
        totalItems={2}
        loadMore={() => console.log('hi')}
      />,
    )
    expect(screen.getAllByRole(/img/i)).toHaveLength(2)
    expect(screen.getAllByAltText(/alt description/)).toHaveLength(2)
  })
})

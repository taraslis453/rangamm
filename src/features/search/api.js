import {Unsplash} from 'api-configure'
export const getPhotos = async (query, page, order_by, color, orientation) => {
  if (color === 'any') {
    color = null
  }
  if (orientation === 'any') {
    orientation = null
  }
  const response = await Unsplash('/search/photos', {
    params: {query, page, order_by, color, orientation},
  })
  return response.data
}

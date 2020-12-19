import {Unsplash} from 'api-configure'
export const getPhotos = async (query, page) => {
  const response = await Unsplash('/search/photos', {
    params: {query, page},
  })
  return response.data
}

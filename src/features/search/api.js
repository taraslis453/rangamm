import { unsplash } from 'api-configure'
import { toJson } from 'unsplash-js';

export const getPhotos = (query) => {
    return (unsplash.search.photos(query, 1, 10).then(toJson))
}
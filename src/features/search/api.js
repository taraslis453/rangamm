import { unsplash } from 'api-configure'
import { toJson } from 'unsplash-js';

export const getPhotos = (query, page) => {
    return (unsplash.search.photos(query, page, 4).then(toJson))
}
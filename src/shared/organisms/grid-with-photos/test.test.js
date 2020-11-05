import { pathParser } from './index'

describe('Path parser', () => {
    test('Path parser result', () => {
        let result = 'https://test.com';
        let obj = {
            url: {
                regular: "https://test.com"
            }
        };
        expect(pathParser(obj, 'url.regular')).toEqual(result)
    })
})


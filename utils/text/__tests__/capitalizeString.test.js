import capitalizeString from '../capitalizeString'

test('capitalizeString', () => {
    expect(capitalizeString('LUKE JAMES')).toEqual('Luke James')
    expect(capitalizeString(' luke james ')).toEqual('Luke James')
    expect(capitalizeString('Luke')).toEqual('Luke')

    expect(capitalizeString('123LUKE')).toEqual('123luke')
})
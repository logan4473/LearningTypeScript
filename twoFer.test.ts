import { twoFer } from "./twoFer"

test('One for name, one for me.',()=>{
    expect(twoFer('Alice')).toEqual('One for Alice, one for me.')
    expect(twoFer('Bob')).toEqual('One for Bob, one for me.')
    expect(twoFer()).toEqual('One for you, one for me.')
    expect(twoFer('Zaphod')).toEqual('One for Zaphod, one for me.')
})
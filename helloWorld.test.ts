import {hello} from './helloWorld'

test('says hello world', () => {
    expect(hello()).toEqual('Hello, World!')
  })
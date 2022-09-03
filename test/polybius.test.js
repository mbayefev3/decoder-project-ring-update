// Write your tests here!
const {polybius} =require('../src/polybius')

const expect=require('chai').expect


describe('polybius', () =>{

    describe('encoding part', () =>{
        // When encoding, it translates the letters i and j to 42.

it('When encoding, it translates the letters i and j to 42.',() =>{

    const message='ij'
    const expected='42'
    const actual=polybius(message)
    expect(actual).to.equal('4242')
})

// It ignores capital letters. (For example, the results of A Message and a message should be the same.)
it('ignores capital letters', () =>{

    // polybius("Hello world"); //> '3251131343 2543241341'
    const message="Hello world"
    const expected='3251131343 2543241341'
    const actual=polybius(message)
    expect(actual).to.equal(expected)

})

    })
})


// Write your tests here!
const {polybius} =require('../src/polybius')

const expect=require('chai').expect


describe('polybius', () =>{

    describe('encoding part', () =>{

it('When encoding, it translates the letters i and j to 42.',() =>{

    const message='ij'
    const expected='42'
    const actual=polybius(message)
    expect(actual).to.equal('4242')
})

it('ignores capital letters', () =>{

    const message="Hello world"
    const expected='3251131343 2543241341'
    const actual=polybius(message)
    expect(actual).to.equal(expected)

})
it('maintains spaces in the message, before and after encoding',()=>{

    const message="H ello world"
    const expected='32 51131343 2543241341'
    const actual=polybius(message)
    expect(actual).to.equal(expected)
})
 })


    describe('decoding part', () => {
  it('When decoding, it translates the number 42 to (i/j)', () =>{
            const message='42'
            const expected='(i/j)'
            const actual=polybius(message,false)
            expect(actual).to.equal(expected)
        })

        it('It maintains spaces in the message, before and after decoding', () =>{
            const expected="h ello world"
            const message="32 51131343 2543241341"
            const actual=polybius(message,false)
            expect(actual).to.equal(expected)
  })


    })
})


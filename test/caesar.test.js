// Write your tests here!

const {caesar}= require('../src/caesar')
const expect=require('chai').expect
// console.log(caesar)

// It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.


describe('caesar',()=>{

    describe('Errors checking',() =>{
     it('returns false if the given shift value is equal to 0', () =>{
        const input='thinkful'
       const shift=0
       const actual=caesar(input,shift)

       expect(actual).to.be.false


   }) 
   it('returns false if the given shift value is less than -25', () =>{
    const input='thinkful'
   const shift=-26
   const actual=caesar(input,shift)

   expect(actual).to.be.false


}) 
it('returns false if the given shift value is greater than 25', () =>{
    const input='thinkful'
   const shift=99
   const actual=caesar(input,shift)

   expect(actual).to.be.false


}) 
it('returns false if the given shift value is not present', () =>{
    const input='thinkful'
//    const shift=99
   const actual=caesar(input)

   expect(actual).to.be.false


})
    })
    describe('encoding part',() =>{
        it('it gnores capital letters', () =>{
            // caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
            const input="This is a secret message!"
            const shift=8
            const expected='bpqa qa i amkzmb umaaiom!'
            const actual=caesar(input,shift)
            expect(actual).to.equal(expected)

        })

        // caesar("Zebra Magazine", 3) => "cheud pdjdclqh")
    it('when encoding it handles shifts that goes past the end of the alphabet',()=>{
        const input='Zebra Magazine'
        const shift=3
        const expected="cheud pdjdclqh"
        const actual=caesar(input,shift)
        expect(actual).to.equal(expected)

    })

    // It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
    it('It maintains spaces and other nonalphabetic symbols in the message, before and after encoding',() =>{

        // caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
        const input="This&is a secret message!"
        const shift=8
        const expected='bpqa&qa i amkzmb umaaiom!'
        const actual=caesar(input,shift)
        expect(actual).to.equal(expected)

    })
    })

    describe('decoding part',() =>{
        it('it gnores capital letters', () =>{
            // caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
            // caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
            const input="BPQA qa I amkzmb umaaiom!"
            const expected='this is a secret message!'
            const shift=8
            const encoded=false
            const actual=caesar(input,shift,encoded)
            expect(actual).to.equal(expected)

        })

        it('It maintains spaces and other nonalphabetic symbols in the message, before and after decoding',() =>{

            // caesar("This is a secret message!", 8); //> 
            const input='bpqa$$qa i amkzmb umaaiom!'
            const shift=8
            const expected="this$$is a secret message!"
            const encoded=false
            const actual=caesar(input,shift,encoded)
            expect(actual).to.equal(expected)
    
        })

    })
})
// Write your tests here!
const { expect } = require('chai')
const  {substitution} =require('../src/substitution')

describe('substitution', () =>{

    describe('error checking', () =>{

        it('returns false if the given alphabet isn\'t exactly 26 characters long.', () =>{

            const input='thinkful'
            const alphabet='short'
            const actual=substitution(input,alphabet)
            expect(actual).to.be.false

        })
        it('returns false if there are any duplicate characters in the given alphabet', () =>{

            const input='thinkful'
            const alphabet= "abcabcabcabcabcabcabcabcyz"
            const actual=substitution(input,alphabet)
            expect(actual).to.be.false

        })
    })

    describe('decoding part', () =>{

        it('It correctly translates the given phrase, based on the alphabet given to the function', () =>{

            // substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
            const input ='thinkful'
            const alphabet="xoyqmcgrukswaflnthdjpzibev"
            const actual=substitution(input,alphabet)
            const expected='jrufscpw'
            expect(actual).to.equal(expected)

        })

        it('It maintains spaces in the message, before and after encoding', () =>{

            // substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'

            // substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
            const input ="You are an excellent spy"
            const alphabet="xoyqmcgrukswaflnthdjpzibev"
            const actual=substitution(input,alphabet)
            const expected='elp xhm xf mbymwwmfj dne'
            expect(actual).to.equal(expected)

        })
        
        it('ignores capital letters', () =>{

            // substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'

            substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'

            const input ="THinkful"
            const alphabet="xoyqmcgrukswaflnthdjpzibev"
            const actual=substitution(input,alphabet)
            const expected='jrufscpw'
            expect(actual).to.equal(expected)

        })
    })

    describe('decoding part', () => {
        it('It correctly translates the given phrase, based on the alphabet given to the function', () =>{

            // substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"            const input ='thinkful'
            const input ="y&ii$r&"
            const alphabet="$wae&zrdxtfcygvuhbijnokmpl"
            const actual=substitution(input,alphabet,false)
            const expected="message"
            expect(actual).to.equal(expected)

        })

        it('ignores capital letters', () =>{

            // substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'

            // substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
            // substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'


            const input ="JRufscpw"
            const alphabet="xoyqmcgrukswaflnthdjpzibev"
            const actual=substitution(input,alphabet,false)
            const expected='thinkful'
            expect(actual).to.equal(expected)

        })

        
        it('It maintains spaces in the message, before and after decoding', () =>{

            // substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

            const input ="y & ii$r&"
            const alphabet="$wae&zrdxtfcygvuhbijnokmpl"
            const actual=substitution(input,alphabet,false)
            const expected= "m e ssage"
            expect(actual).to.equal(expected)

        })
        

    })
})
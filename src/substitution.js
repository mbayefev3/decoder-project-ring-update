// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope


  
  function substitution(input, alphabet, encode = true) {
    input=input.toLowerCase()

    if(alphabet===undefined) return false
    
      if([... new Set(alphabet)].length!== alphabet.length || alphabet.length!==26) return false
      
    
      const alphabetsList=[
        'A','B','C','D','E','F',
        'G','H','I','J','K',
        'L','M','N','O','P','Q','R','S',
        'T','U','V','W','X','Y','Z'
        ]
    
        if(encode){
          const characterIndexexFromArray=input.split('').map(character => {
            if(character===' '){
              return character
            }else{
            return  alphabetsList.indexOf(character.toUpperCase())
            }
          })  
           const character=characterIndexexFromArray.map(character =>{
             if(character===' '){
               return character
             }else{
               return alphabet[character]
             }
           })
          return character.join('')
        }else{
          
          const getIndex=input.split('').map(character => {
            if(alphabet.indexOf(character)!==-1){
              return alphabet.indexOf(character)
            }else{
             return character
            }
          })
          // console.log(getIndex)
          const character=getIndex.map(character => {
            if(character===' '){
              return character
            }
            return alphabetsList[character]
          })
          return character.join('').toLowerCase()
        }
        
      // your solution code here
    }
    


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

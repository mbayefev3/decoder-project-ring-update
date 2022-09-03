// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope


  
  function substitution(input, alphabet, encode = true) {

    if(alphabet===undefined){
      return false
    }
      if([... new Set(alphabet)].length!==26){
    
        return false
      }
    
      const table=[
        'A','B','C','D','E','F',
        'G','H','I','J','K',
        'L','M','N','O','P','Q','R','S',
        'T','U','V','W','X','Y','Z'
        ]
    
        if(encode){
          const char=input.split('').map(c => {
            if(c===' '){
              return c
            }else{
            return  table.indexOf(c.toUpperCase())
            }
          })  
           const an=char.map(c =>{
             if(c===' '){
               return c
             }else{
               return alphabet[c]
             }
           })
          return an.join('')
        }else{
          
          const getIndex=input.split('').map(c => {
            if(alphabet.indexOf(c)!==-1){
              return alphabet.indexOf(c)
            }else{
             return c
            }
          })
          // console.log(getIndex)
          const alpha=getIndex.map(c => {
            if(c===' '){
              return c
            }
            return table[c]
          })
          return alpha.join('').toLowerCase()
        }
        
      // your solution code here
    }
    


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

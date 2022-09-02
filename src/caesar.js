// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    const alphabets=[
      'A','B','C','D','E',
      'F','G','H','I','J','K',
    'L','M','N','O','P','Q','R',
    'S', 'T','U','V','W','X','Y','Z'
    ]

if(!shift || shift< -25 || shift>25) return false

const helperFuncOne=(input) =>{
   return input.toUpperCase().split('').map(character => {
    if(alphabets.indexOf(character)!==-1){
      return alphabets.indexOf(character)
    }else{
      return character
    }
  })
}

    if(shift>0 && encode){

let encodedInput=''
      const modifiedInputToArrayAndGetIndex=helperFuncOne(input)
  
      for(let index of modifiedInputToArrayAndGetIndex){
        if(typeof index ==='string'){
          encodedInput+=index
          continue
        }
        let addIndexAndShift=index+shift
        if(addIndexAndShift <25) {
          encodedInput+=alphabets[addIndexAndShift]
        }else {
          let totalIndexInAlphabets=25
          while(addIndexAndShift>totalIndexInAlphabets){
            addIndexAndShift-=totalIndexInAlphabets
            if(addIndexAndShift<=25){
              encodedInput+=alphabets[addIndexAndShift-1]
              break
            }

          }
        }
      }

return encodedInput.toLowerCase()
    }
    else if(shift <0 && encode){
      let encodedInput=''

      const modifiedInputToArrayAndGetIndex=helperFuncOne(input)

      for(let index of modifiedInputToArrayAndGetIndex){
        if(typeof index ==='string'){
          encodedInput+=index
          continue
        }
        let addIndexAndShift=index+shift
        if(Math.sign(addIndexAndShift)===1 ) {
          encodedInput+=alphabets[addIndexAndShift]
        }else{
          let totalIndexInAlphabets=25
   while(addIndexAndShift<0){
              addIndexAndShift+=totalIndexInAlphabets
              if(addIndexAndShift>=0){
                encodedInput+=alphabets[addIndexAndShift+1]
                break
              }
  
            }
        }
      
      }

      return encodedInput.toLowerCase()
    }else if(shift>0 && !encode){
      let decodedInput=''
      const modifiedInputToArrayAndGetIndex=helperFuncOne(input)

      for(let index of modifiedInputToArrayAndGetIndex){
        if(typeof index ==='string'){
          decodedInput+=index
          continue
        }
        let addIndexAndShift=index-shift
        if(Math.sign(addIndexAndShift)===1 ||  addIndexAndShift===0) {
          decodedInput+=alphabets[addIndexAndShift]
        }else{
          let totalIndexInAlphabets=25
   while(addIndexAndShift<0){
              addIndexAndShift+=totalIndexInAlphabets
              if(addIndexAndShift>=0){
                decodedInput+=alphabets[addIndexAndShift+1]
                break
              }
  
            }
        }
      
      }
      return decodedInput.toLowerCase()
    }else if(shift <0 && !encode){

      
let encodedInput=''
const modifiedInputToArrayAndGetIndex=helperFuncOne(input)
for(let index of modifiedInputToArrayAndGetIndex){
  if(typeof index ==='string'){
    encodedInput+=index
    continue
  }
  let addIndexAndShift=index-shift
  if(addIndexAndShift <=25) {
    encodedInput+=alphabets[addIndexAndShift]
  }else {
    let totalIndexInAlphabets=25
    while(addIndexAndShift>totalIndexInAlphabets){
      addIndexAndShift-=totalIndexInAlphabets
      if(addIndexAndShift<=25){
        encodedInput+=alphabets[addIndexAndShift-1]
        break
      }

    }
  }
}

return encodedInput.toLowerCase()
    }
  }

  return {
    caesar,
  };
})();



// caesar("wklqnixo", 3, false); //> 'thinkful'

// caesar("thinkful", 3); //> 'wklqnixo'
// aesar("thinkful", -3); //> 'qefkhcri'

module.exports = { caesar: caesarModule.caesar };

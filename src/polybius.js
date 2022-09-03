// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  
function polybius(input, encode = true) {
  const alphabets=[
'A','B','C','D','E','F',
'G','H','I','J','K',
'L','M','N','O','P','Q','R','S',
'T','U','V','W','X','Y','Z'
]


if(encode===false){
  let getIndexOfSpace=input.indexOf(' ')
if(getIndexOfSpace!==-1){
  if(input.replace(input[getIndexOfSpace],'').length%2!==0)return false

}else if(input.length%2!==0) return false
}



let container=[]
let arrHolder=[]


for(let character of alphabets){


if(arrHolder.length%5===0 && arrHolder.length!==0){
  container.push(arrHolder)
  arrHolder=[]
} if(character==='I'){arrHolder.push('I/J')}
 else if(character!=='J'){ arrHolder.push(character) }}

container.push(arrHolder)
// console.log(container)

if(encode){
  
const getDigits=(character) =>{
  character=character.toUpperCase()
let firstDigitChar=''
let secondDigitChar=''
for(let i=0; i<container.length; i++){
if(character==='I' ||character==='J'){
  if(container[i].indexOf('I/J')!==-1){
    firstDigitChar=container[i].indexOf('I/J')+1
    secondDigitChar=i+1
    continue
  }

}
  if(container[i].indexOf(character)!==-1){
    firstDigitChar=container[i].indexOf(character)+1
    secondDigitChar=i+1
  }
} 

return firstDigitChar+''+secondDigitChar

}

const result=input.toUpperCase().split('').map(character => {
  if(character===' '){
    return character
  }
  else{
  return  getDigits(character)
  }
})
return result.join('')
// console.log(getDigits('k'))
// console.log(container)
}else{
let placeHolder=[]
let character=''
for(let i=0; i<input.length; i++){
  if(input[i]===' '){
    placeHolder.push(' ')
    continue
  }
  character+=input[i]
  if(character.length===2){
placeHolder.push(character)
character=''
  }
}
// console.log(placeHolder)
placeHolder=placeHolder.map(character => {

  if(character===' '){
    return ' '
  }else{
const first=Number(character[0])
  const second=Number(character[1])
  const getCharacter=container[second-1][first-1]
  // console.log('f',getCharacter)
  if(getCharacter==='I/J'){
    return '(i/j)'
  }else{
    return getCharacter
  }
  }
     
   
})

return placeHolder.join('').toLowerCase()
}
}


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

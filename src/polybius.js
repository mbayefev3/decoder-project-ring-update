// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  
function polybius(input, encode = true) {
  const array=[
'A','B','C','D','E','F',
'G','H','I','J','K',
'L','M','N','O','P','Q','R','S',
'T','U','V','W','X','Y','Z'
]


if(encode===false){
  let idx=input.indexOf(' ')
if(idx!==-1){
  if(input.replace(input[idx],'').length%2!==0)return false

}else if(input.length%2!==0) return false
}



let container=[]
let arrHolder=[]


for(let char of array){


if(arrHolder.length%5===0 && arrHolder.length!==0){
  container.push(arrHolder)
  arrHolder=[]
} if(char==='I'){arrHolder.push('I/J')}
 else if(char!=='J'){ arrHolder.push(char) }}

container.push(arrHolder)
// console.log(container)

if(encode){
  
const getDigits=(c) =>{
  c=c.toUpperCase()
let x=''
let y=''
for(let i=0; i<container.length; i++){
if(c==='I' ||c==='J'){
  if(container[i].indexOf('I/J')!==-1){
    x=container[i].indexOf('I/J')+1
    y=i+1
    continue
  }

}
  if(container[i].indexOf(c)!==-1){
    x=container[i].indexOf(c)+1
    y=i+1
  }
} 

return x+''+y

}

const answer=input.toUpperCase().split('').map(c => {
  if(c===' '){
    return c
  }
  else{
  return  getDigits(c)
  }
})
return answer.join('')
// console.log(getDigits('k'))
// console.log(container)
}else{
let answer=[]
let char=''
for(let i=0; i<input.length; i++){
  if(input[i]===' '){
    answer.push(' ')
    continue
  }
  char+=input[i]
  if(char.length===2){
answer.push(char)
char=''
  }
}
// console.log(answer)
answer=answer.map(c => {

  if(c===' '){
    return ' '
  }else{
const first=Number(c[0])
  const second=Number(c[1])
  const sol=container[second-1][first-1]
  // console.log('f',sol)
  if(sol==='I/J'){
    return '(i/j)'
  }else{
    return sol
  }
  }
     
   
})

return answer.join('').toLowerCase()
}
}


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

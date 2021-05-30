
// let btn = document.getElementById('btn')
// let list = document.getElementById('dd');


// btn.addEventListener('click',function(){
//    let clo =list.lastElementChild.cloneNode(true)
//    clo.innerHTML ='skfls'
//    list.append(clo)
   
// });


//   list.addEventListener('click',function(e){
// this.contains(e.target)
//     e.target.remove()

//   })

//   let name =document.getElementById('name')
//   let nameid = document.getElementById('nameid')
//  name.addEventListener('keypress',function(e){
// if(e.key == 'Enter'){
  
//     nameid.innerHTML=e.target.value

// e.target.value =''

// }
//   })

  let result = document.getElementById('result')

let skils = document.getElementsByName('skils');


let check =[];
[...skils].forEach(skil =>{
  skil.addEventListener('change',function(e){
    if(e.target.checked){
    
      check.push(e.target.value)

output(result,check)
     
    }else{

let unC = check.indexOf(e.target.value)
check.splice(unC,1)
output(result,check)
      
    }
  })
})

function output(parent,skils){
  let result =''
  skils.forEach((skill,index)=>{
result+=`( ${index +1}) ${skill} `
  })
parent.innerHTML=result;
}




box.addEventListener('mousemove',function(e){
document.getElementById('x-value').innerHTML =e.screenX;
document.getElementById('y-value').innerHTML =e.screenY;
console.log(e);
})











//TITLE Styel

let title = document.getElementById('title')


    console.log(title);

title.style.color = 'red';
title.style.borderColor = 'green';
title.style.border ='10px'
title.style.fontSize='40px'


//List ADD AND Remove 'Button' And Enter keyPress Use;

let list = document.getElementById('list');
let text = document.getElementById('name');
let nameid = document.getElementById('nameid');


// let cr =document.createElement('li')



    let btn = document.getElementById('btn')
   text.addEventListener('keypress',function(event){
    if(text.value !== ''){
       if(event.key == 'Enter'){
          
        let lis = list.lastElementChild.cloneNode(true)
        lis.innerHTML = text.value;
       list.appendChild(lis)
       text.value =''
           }
    }
});
     btn.addEventListener('click',function(){
         let nam=document.createElement('p')
     nam.innerHTML = text.value;
nameid.appendChild(nam)
text.value =''
     })

  

//List Remove
    list.addEventListener('click',function(e){
       this.contains(e.target)
      e.target.remove()
     
    })

let result =document.getElementById('result')
    let select = document.getElementsByName('skils')
    


let check =[];
    [...select].forEach(se=>{
    se.addEventListener('change',function(e){

        if(e.target.checked){
            check.push(e.target.value)
            output(result,check)
           
        }else{

            let ind = check.indexOf(e.target.value)
            check.splice(ind,1)
            output(result,check)
        }

    })
})

function output(s,check){
   let result = ''
   check.forEach((a,b)=>{
result +=  ` ${b + 1}\// ${a} `
   })
s.innerHTML = result;
}




let update = document.getElementById('update');
update.addEventListener('dblclick',function(event){
 if(this.contains(event.target)){
let valu = event.target.innerHTML;
event.target.innerHTML = ''
 let cre = cret(valu);
 
 event.target.appendChild(cre);
 cre.addEventListener('keypress',function(e){
    if(e.key == 'Enter' ){
        event.target.innerHTML = e.target.value;
    };
})
 }

});



function cret(valu){
let inp =document.createElement('input');
inp.type='text';
inp.value =valu;
return inp;
}

   




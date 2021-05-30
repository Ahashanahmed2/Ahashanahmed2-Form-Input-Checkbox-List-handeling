let load = document.getElementById('load');
let post = document.getElementById('post');
let po = document.getElementById('po');
const url = 'http://jsonplaceholder.typicode.com/posts';

load.addEventListener('click',function(){
    fetch(url)
    .then(Response =>Response.json())
    .then(data => {
        data.forEach((e, ind )=> {
            let up =  upload(e,ind );
            let u =  uplo(e,ind );
            post.appendChild(up);
            po.appendChild(u);
            
        });
      
console.log(data)
    })
    .catch(e => console.log(e.movies))
})


function upload(uplod, index){
   let li = document.createElement('p')
   li.className ='json file';
   li.innerHTML =`${index + 1} ${uplod.title}`;
return li ;
}
function uplo(up,ind){
    let li = document.createElement('option')
    li.className ='json';
    li.innerHTML = `${ind +1} ${up.title}`;
 return li ;
 }
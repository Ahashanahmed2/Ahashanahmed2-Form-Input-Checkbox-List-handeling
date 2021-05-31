

let postForm = document.getElementById('post_form');
let post = document.getElementById('posts');
const url= 'https://jsonplaceholder.typicode.com/posts'


postForm.addEventListener('submit',function(e){
e.preventDefault();

let title = this.title.value || undefined
let body = this.body.value || undefined

if(title && body){
    let postObj ={
        userId :100,
        title,
        body
    }
    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'Application/json'
        },
        body:JSON.stringify(postObj)
    })
    .then(Response =>Response.json())
    .then((data,index) => {

        let postdata = postfetch(data,index)
        post.appendChild(postdata)

        
        this.reset();
    })
    .catch(e => console.log(e.message))

}else{alert('please Provide Every Details')}

console.log(e);

function postfetch(data,index){
let li = document.createElement('li')
li.className = "post_data";
li.innerHTML =`${data.title} / ${data.body} / ${data.userId} `
return li
}

})
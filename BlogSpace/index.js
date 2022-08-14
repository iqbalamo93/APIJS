
let postArray = []
const form = document.getElementById("new-post")


const renderPosts = (Arr) =>{
        let html = " "
            for (let post of Arr){
                html +=`
                <div class='wrapper'>
                    <h3>${post.title} </h3>
                    <p>${post.body}</p>
                </div>
                `
            }
            document.getElementById('log-list').innerHTML=html
            
        }
fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then( response => response.json())
    .then(data => {
        console.log(typeof data)
        console.log(data.slice(0,5))
        postArray = data.slice(0,5)
        renderPosts(postArray)
    })


    document.getElementById("new-post").addEventListener('submit',(e)=>{
        e.preventDefault()//won't refresh when clicked submit
        const postTitle = document.getElementById('name').value 
        const postBody = document.getElementById('tarea').value

        const data ={
            title:postTitle,
            body:postBody
        }
        
        fetch('https://apis.scrimba.com/jsonplaceholder/posts',
        {method:'POST',
        body: JSON.stringify(data),
        headers:{
            "content-Type":"application/json"
        }}
        ).then(response =>response.json())
        .then(data => {
            postArray.unshift(data)
            renderPosts(postArray)
            form.reset()
        }
        )
    })
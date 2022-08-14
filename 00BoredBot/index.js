


document.getElementById('task').addEventListener("click",() =>{
        fetch('https://apis.scrimba.com/bored/api/activity')
                .then((response) => response.json())
                .then(data=>{
                  console.log(data)
                  document.querySelector('.idea').textContent = data.activity
                  document.body.classList.add('fun')
                })
              })
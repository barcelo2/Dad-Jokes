
const url = 'https://icanhazdadjoke.com/sss';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


btn.addEventListener('click', ()=>{
   fetchJoke()
})


const fetchJoke= async ()=>{
result.textContent='...Loading'
try{
    const response=await fetch(url, {
        headers:{
           Accept:'application/json',
           'User-agent':'learning app',
        },
    })
    if(!response.ok){
        throw new Error('there was an error')
    }
    
    const data=await response.json()
    result.textContent=data.joke
}
catch (error){
    result.textContent='There was an error';
}

}
fetchJoke()
console.log('Client side javascript file is loaded!')

// fetch('http://localhost:3000/weather?address=bhopal').then(response => {
//     response.json().then((data) => {
//         if (data.error){
//             console.log('enter location properly')
//         }else{
//             const forecast = data.forecast
//             const location = data.location

            
//         }
        
//     })
// })

const weatherfrom =  document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#p1')
const error = document.querySelector('#p2')

weatherfrom.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
    response.json().then((data) => {
        if (data.error){
            console.log(data.error)
            error.innerHTML = data.error
        }else{
            const forecast = data.forecast
            const location = data.location
            message.innerHTML = forecast 

            
        }
        
    })
})

})
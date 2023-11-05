const usersBtn = document.querySelector('#buttonUsers')
const usersDOM = document.querySelector('#buttonDOM')
const usersCont = document.querySelector('#usersContainer')

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        const { data } = res
        data.forEach((user) => {
            console.log(user)
        })
    })
    .catch((err) => console.error(err))

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        const { data } = res
        data.forEach((user) => {
            console.log(user.name)
        })
    })
    .catch((err) => console.error(err))

const users = axios.get('https://jsonplaceholder.typicode.com/users')

const usersFunction = () => users.then((res) => console.log(res))

const usersDOMFunction = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        const { data } = res
        data.forEach((user) => {
            usersCont.innerHTML += `<p>${user.name}</p>`
        })
    })
    .catch((err) => console.error(err))
}

usersBtn.addEventListener('click',usersFunction)
usersDOM.addEventListener('click', usersDOMFunction)

// EXTRAS


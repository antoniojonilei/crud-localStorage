const $cadastrarBtn = document.querySelector('.add-btn')
const $fecharBtn = document.querySelector('.close-btn')

const $fade = document.querySelector('#fade')
const $modal = document.querySelector('#modal')


function modalToggle() {
    $fade.classList.toggle('hide')
    $modal.classList.toggle('hide')
}

$cadastrarBtn.addEventListener('click', modalToggle)
$fecharBtn.addEventListener('click', modalToggle)
// $fade.addEventListener('click', modalToggle)


// [MODELO]
const dados = {
    dado01: "teste de dado00",
    dado02: "teste de dado02",
    dado03: "teste de dado03",
    dado04: "teste de dado04",
    dado05: "teste de dado05"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient))

// [CRUD] - CREATE
function cadastrarDado(client) {
    const dbClient = getLocalStorage()
    dbClient.push(client)    
    setLocalStorage(dbClient)
}

// stop at - 28:04
// https://www.youtube.com/watch?v=_HEIqE_qqbQ&t=320s
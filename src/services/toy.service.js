
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const BASE_URL = 'toy/'

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter
}


function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)

}
function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}


function getEmptyToy() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
        speed: utilService.getRandomIntInclusive(75, 200),
    }
}


function getDefaultFilter() {
    return { txt: '', maxPrice: '' }
}






// import Axios from 'axios'
// import { utilService } from './util.service.js'

// const axios = Axios.create({
//     withCredentials: true
// })

// const BASE_URL = 'http://127.0.0.1:3030/api/toy'


// export const toyService = {
//     query,
//     getById,
//     save,
//     remove,
//     getEmptyToy,
//     getDefaultFilter
// }


// function query(filterBy = {}) {
//     return axios.get(BASE_URL, filterBy)
// }

// function getById(toyId) {
//     return axios.get(BASE_URL + toyId)

// }
// function remove(toyId) {
//     return axios.delete(BASE_URL + toyId)
// }

// function save(toy) {
//     if (toy._id) {
//         return axios.put(BASE_URL, toy)
//     } else {
//         return axios.post(BASE_URL, toy)
//     }
// }


// function getEmptyToy() {
//     return {
//         name: 'Barbie',
//         price: utilService.getRandomIntInclusive(20, 200),
//     }
// }

// function getDefaultFilter() {
//     return { name: '', maxPrice: '', inStock: true }
// }









// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'

// const STORAGE_KEY = 'toyDB'

// export const toyService = {
//     query,
//     getById,
//     save,
//     remove,
//     getEmptyToy,
//     getDefaultFilter
// }



// function query(filterBy = {}) {
//     if (!filterBy.name) filterBy.name = ''
//     if (!filterBy.maxPrice) filterBy.maxPrice = Infinity
//     const regExp = new RegExp(filterBy.name, 'i')
//     return storageService.query(STORAGE_KEY)
//         .then(toys => {
//             return toys.filter(toy =>
//                 regExp.test(toy.name) &&
//                 toy.price <= filterBy.maxPrice
//             )
//         })
// }

// function getById(toyId) {
//     return storageService.get(STORAGE_KEY, toyId)
// }

// function remove(toyId) {
//     return storageService.remove(STORAGE_KEY, toyId)
// }

// function save(toy) {
//     if (toy._id) {
//         return storageService.put(STORAGE_KEY, toy)
//     } else {
//         return storageService.post(STORAGE_KEY, toy)
//     }
// }

// function getEmptyToy() {
//     return {
//         name: 'Barbie',
//         price: utilService.getRandomIntInclusive(20, 200),
//     }
// }

// function getDefaultFilter() {
//     return { name: '', maxPrice: '', inStock: true }
// }




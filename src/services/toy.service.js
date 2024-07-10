
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

import barbie from "../assets/img/barbie.png"

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
    console.log(toy)
    if (toy._id) {
        return httpService.put(BASE_URL, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}


function getEmptyToy() {
    return {
        name: 'Barbie',
        price: utilService.getRandomIntInclusive(20, 350),
        inStock: true,
        imgSrc: barbie
    }
}


function getDefaultFilter() {
    return { name: '', maxPrice: '' }
}

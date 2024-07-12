
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

import barbieglitter from "../assets/img/barbieglitter.png"

const BASE_URL = 'toy/'

const labels = [
    'On wheels',
    'Box game',
    'Art',
    'Baby',
    'Doll',
    'Puzzle',
    'Outdoor',
    'Battery Powered',
]

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter,
    getToyLabels,
    getLabelCountsAndLabels
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
    // console.log(toy)
    if (toy._id) {
        return httpService.put(BASE_URL, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}


function getEmptyToy() {
    return {
        name: 'Glitter Barbie',
        price: utilService.getRandomIntInclusive(20, 350),
        inStock: true,
        labels: ['Baby', 'Doll'],
        imgSrc: barbieglitter
    }
}


function getDefaultFilter() {
    return { name: '', maxPrice: '' }
}

function getToyLabels() {
    return [...labels]
}

function _getLabelsStats() {
    return query().then(toysArr => {
        const labelCounts = {}
        toysArr.forEach(toy => {
            toy.labels.forEach(label => {

                if (labelCounts[label]) {
                    labelCounts[label]++
                } else {
                    labelCounts[label] = 1
                }
            })
        })
        const labelStats = Object.keys(labelCounts).map(label => ({
            label,
            count: labelCounts[label]
        }))
        return labelStats
    })
}


function getLabelCountsAndLabels() {
    return _getLabelsStats().then(labelStats => {
        const label = labelStats.map(stat => stat.label)
        const count = labelStats.map(stat => stat.count)

        return { label, count }
    })
}


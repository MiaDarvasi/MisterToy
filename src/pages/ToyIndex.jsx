import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { ToyList } from '../cmps/ToyList.jsx'
import { toyService } from '../services/toy.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { loadToys, removeToy, removeToyOptimistic, saveToy, setFilterBy } from '../store/actions/toy.actions.js'

export function ToyIndex() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    const filterBy = useSelector(storeState=>storeState.toyModule.filterBy)
    const dispatch = useDispatch()
    
    useEffect(() => {
        loadToys()
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Cannot load toys')
            })
    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)   
    }

    function onRemoveToy(toyId) {
        removeToyOptimistic(toyId)
            .then(() => showSuccessMsg('Toy removed'))
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Cannot remove toy')
            })
    }

    function onAddToy() {
        const toyToSave = toyService.getEmptyToy()
        saveToy(toyToSave)
            .then((savedToy) => {
                showSuccessMsg(`Toy added (id: ${savedToy.vendor})`)
            })
            .catch(err => {
                console.log('Cannot add toy', err)
                showErrorMsg('Cannot add toy')
            })
    }

    function onEditToy(toy) {
        const price = +prompt('New price?')
        const toyToSave = { ...toy, price }

        saveToy(toyToSave)
            .then((savedToy) => {
                showSuccessMsg(`Toy updated to price: $${savedToy.price}`)
            })
            .catch(err => {
                console.log('Cannot update toy', err)
                showErrorMsg('Cannot update toy')
            })
    }

    return (
        <div>
            <h3>Our Toys</h3>
            <main>
                <button onClick={onAddToy}>Add Toy</button>
                <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                {isLoading
                    ? <div>Loading...</div>
                    : <ToyList
                        toys={toys}
                        onRemoveToy={onRemoveToy}
                        onEditToy={onEditToy}
                    />}
            </main>
        </div>
    )

}
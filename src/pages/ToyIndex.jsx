import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { ToyList } from '../cmps/ToyList.jsx'
// import { toyService } from '../services/toy.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { loadToys, removeToy, removeToyOptimistic, saveToy, setFilterBy } from '../store/actions/toy.actions.js'

export function ToyIndex() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)

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

    async function onRemoveToy(toyId) {
        try {
            await removeToyOptimistic(toyId)
                showSuccessMsg('Toy removed successfully')
        } catch (err) {
            console.log('err:', err)
            showErrorMsg('Cannot remove toy')
        }

    }

    // function onAddToy() {
    //     const toyToSave = toyService.getEmptyToy()
    //     saveToy(toyToSave)
    //         .then((savedToy) => {
    //             showSuccessMsg(`Toy added (id: ${savedToy.vendor})`)
    //         })
    //         .catch(err => {
    //             console.log('Cannot add toy', err)
    //             showErrorMsg('Cannot add toy')
    //         })
    // }

    async function onEditToy(toy) {
        const price = +prompt('New price?')
        const toyToSave = { ...toy, price }

        try {
            await saveToy(toyToSave)
            showSuccessMsg(`Toy updated to price: $${savedToy.price}`)
        } catch (err) {
            console.log('Cannot update toy', err)
            showErrorMsg('Cannot update toy')
        }
    }

    return (
        <div>
            <main>
                <section className="main-top">
                    <div className="search-title">
                        <h3>Search</h3>
                        <h3>our</h3>
                        <h3>Barbies</h3>
                    </div>
                    <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                    <button><Link to={`/toy/edit`}>Add  your Barbie!</Link></button>
                    {/* <button onClick={onAddToy}>Add  your Barbie!</button> */}
                </section>
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
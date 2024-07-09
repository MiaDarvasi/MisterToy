import { ToyPreview } from "./ToyPreview.jsx";

export function ToyList({ toys, onRemoveToy, onEditToy, addToToyt }) {

    return (
        <ul className="toy-list">
            {toys.map(toy =>
                <li className="toy-preview" key={toy._id}>
                    <ToyPreview toy={toy} />
                    <div className="edit-btns">
                        <button onClick={() => onRemoveToy(toy._id)}>Delete</button>
                    </div>
                </li>
            )}
        </ul>
    )
}
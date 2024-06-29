import './MovieBox.css'

export default function MovieBox({ category, selectedMovies, setSelectedMovies }) {

    const handleSelection = (category) => {
        if (selectedMovies.includes(category)) {
            setSelectedMovies(selectedMovies.filter((item) => item !== category))// filter returns a predicate which is a boolean
    
        } else {
            setSelectedMovies([...selectedMovies, category])  //creates a shallow copy of array and updates category and forms a new array
        }
    }
    console.log(selectedMovies)
    return (
        <div style={{ border: `2px solid ${selectedMovies.includes(category) ? "red":"blue"}`}} //includes return a boolean
        className='title' onClick={() => handleSelection(category)}>
            <h1>{category.movie}</h1>
        </div>
    )
}
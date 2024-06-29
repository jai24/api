import { useState } from "react"
import MovieBox from "../components/MovieBox"
import MovieChip from "../components/MovieChip"
import { useNavigate } from "react-router-dom";


const MOVIES = [
  {
    id: 0,
    movie: "Action"
  }, {
    id: 1, movie: "Drama"
  }, {
    id: 2, movie: "Romance"
  },
  {
    id: 3, movie: "Thriller"
  }, {
    id: 4, movie: "Horror"
  }, {
    id: 5, movie: "Western"
  }, {
    id: 6, movie: "Fiction"
  }, {
    id: 7, movie: "Fiction"
  }, {
    id: 8, movie: "Musical"
  }
]


export default function MovieSelection() {
  const navigate1 = useNavigate()
  const [selectedMovies, setSelectedMovies] = useState([])
  const moveNext = () => {
    if (selectedMovies.length < 3) {
      alert("Please select atleast 3 movies")
    }
    else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies))
      setSelectedMovies([])
      navigate1('/Info')
       }
  }
  return (
    <>
      <div style={{   // returned map element stored in this parent div
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)"
      }}>
        {MOVIES.map((loop) =>   //inital display of movie box  step1:
        <div key={loop.id}>
          <MovieBox selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} category={loop} />
        </div>
      )}
      </div>
      {selectedMovies.length < 3 && <p style={{ color: "red" }}>Please select atleast 3 movies</p>}  {/* && this execues if the condition is true */}
      <div>
        {selectedMovies.map((category) =>
          <MovieChip key={category.id} category={category} setSelectedMovies={setSelectedMovies} />)}
      </div>
      <button onClick={moveNext}>Next</button>
    </>
  )
}

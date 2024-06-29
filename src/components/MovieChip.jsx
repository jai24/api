
export default function MovieChip({category, setSelectedMovies}){
   
   const removeSelection = (category)=>{
    
    setSelectedMovies((selectedMovies)=> selectedMovies.filter((item) => item!==category))  // filter returns a predicate which is a boolean
    
   }
   return <button style={{width: "70px",backgroundColor: "lightblue", color: "red" }}>
        {category.movie}&nbsp;&nbsp;&nbsp;<span onClick ={()=>removeSelection(category)}>X</span>
    </button>
}


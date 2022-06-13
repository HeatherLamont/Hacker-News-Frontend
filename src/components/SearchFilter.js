import { useState } from "react";

const SearchFilter = ({handleSearchContent}) => {

    const [search, setSearch] = useState("");

    const handleSearchChange = (event) => {
      setSearch(event.target.value)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        let value = event.target.search.value
        if (value && value.trim().length > 0){
            value = value.trim().toLowerCase()
        }
      handleSearchContent(value)

      setSearch("")
      
    }


    return (  
        <form onSubmit={handleSearchSubmit}>
            <label>
            <input onChange={handleSearchChange} 
            className="search-button" 
            type="text"
            name="search"
            placeholder="Seach by title" 
            value={search}/>
           </label>
           <input className="submit-button" type="submit" value="Search" />

        </form>
    );
}
 
export default SearchFilter;
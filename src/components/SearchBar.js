import { useState } from "react";
import './SearchBar.css';
const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState('');
    function handleChange(event){
        setTerm(event.target.value);
    }
    function handleFormSubmit(event){
        event.preventDefault();
        onSubmit(term);
    }
    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchBar;
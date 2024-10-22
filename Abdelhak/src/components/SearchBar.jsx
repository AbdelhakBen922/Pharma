function SearchBar (props){
    return (
        <div className="searchbar">
            <input type="text" placeholder={props.placeholder}></input>
            <div className="v-line"></div>
            <button className="search-btn">Search</button>
        </div>
    )
}
export default SearchBar
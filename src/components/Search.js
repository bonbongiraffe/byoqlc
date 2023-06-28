
function Search({search, setSearch}) {

    function handleSearch (e){
        setSearch(e.target.value)
    }

    return (
        <div>
            search: <input onChange={handleSearch} value={search}/>
        </div>
    )
}

export default Search
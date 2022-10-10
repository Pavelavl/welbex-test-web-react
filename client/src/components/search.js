import React from 'react'

const Search = ({filteredData}) => {
    return (
        <div className="input-group mb-3">
            <input type="text" onChange={(event) => {filteredData(event.target.value)}} className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"></input>
        </div>
    )
}

export default Search

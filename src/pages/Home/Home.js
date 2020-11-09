import React, { useState } from "react"
import "./Home.css"
import SearchBar from "../../components/Search"

const Home = () => {
    const [searchText, setSearchText] = useState("")

    const handleInput = (e) => {
        setSearchText(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        console.log("Entered:", searchText)
    }

    return (
        <div>
            <SearchBar>
                <SearchBar.Form onSubmit={handleSearch}>
                    <SearchBar.Input 
                        type="text"
                        name="text"
                        id="searchText"
                        autoComplete="off"
                        placeholder="Find a repository"
                        value={searchText}
                        onChange={(e) => handleInput(e)}
                    />
                </SearchBar.Form>
            </SearchBar>
        </div>
    )
}

export default Home
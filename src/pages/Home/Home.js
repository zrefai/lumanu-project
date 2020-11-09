import React, { useState } from "react"
import "./Home.css"
import SearchBar from "../../components/Search"
import Suggestions from "../../components/Suggestions"

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
            {/* <Suggestions>
                <div>Hello</div>
                <div>hello</div>
                <div>Hello</div>
                <div>hello</div>
            </Suggestions> */}
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
        </div>
    )
}

export default Home
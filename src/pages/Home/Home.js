import React, { useState } from "react"
import "./Home.css"
import SearchBar from "../../components/Search"
import SuggestionsList from "../../components/SuggestionsList"
import Suggestion from "../../components/Suggestion"

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
            <SuggestionsList>
                <Suggestion repoName={"Frug/AJAX-Chat"} version={"0.8.8-phpbb3.1"}/>
                <Suggestion repoName={"ryukinix/lisp"} version={"v0.2.0"}/>
                <Suggestion repoName={"Latand/Common-Chat"} version={"N/A"}/>
                <Suggestion repoName={"ianrichard/common-something"} version={"N/A"}/>
                <Suggestion repoName={"AIE-Guild/Green-chat"} version={"v1.11.1"}/>
            </SuggestionsList>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
        </div>
    )
}

export default Home
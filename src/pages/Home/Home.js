import React, { useState } from "react"
import "./Home.css"
import { Octokit } from "@octokit/core"
import SearchBar from "../../components/Search"
import SuggestionsList from "../../components/SuggestionsList"
import Suggestion from "../../components/Suggestion"
import useVisible from "../../hooks/useVisible"

const Home = () => {
    const octokit = new Octokit()
    const {ref, isComponentVisible, setIsComponentVisible} = useVisible(false)
    const [searchText, setSearchText] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [error, setError] = useState("")

    const handleInput = (e) => {
        setSearchText(e.target.value)
        if (isComponentVisible) setIsComponentVisible(false)
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        const promise = await octokit.request('GET /search/repositories', { q: searchText })
        try {
            setSuggestions(promise.data.items.splice(0,5))
        } catch (e) {
            setSuggestions([])
        }
        setIsComponentVisible(true)
    }

    const renderSuggestions = () => {
        if (isComponentVisible) {
            return (
            <div ref={ref}>
                {suggestions.length ? 
                    <SuggestionsList>
                        {suggestions.map((suggestion, i) => <Suggestion key={i} repo={suggestion}/>)}
                    </SuggestionsList> : 
                    <SuggestionsList>
                        <SuggestionsList.Error>No repositories for this search or an error occured</SuggestionsList.Error>
                    </SuggestionsList>}
            </div>)
        }
        return null
    }

    const renderSearch = () => {
        return (
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
        )
    }

    return (
        <div>
            {renderSearch()}
            {renderSuggestions()}
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
            <div style={{display: "flex", backgroundColor: "red", justifyContent: 'center', marginTop: '50px'}}>Hello</div>
        </div>
    )
}

export default Home
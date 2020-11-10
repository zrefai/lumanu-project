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

    const handleSearch = (e) => {
        e.preventDefault()
        octokit.request('GET /search/repositories', {
            q: searchText
        }).then((response) => {
            setSuggestions(response.data.items.splice(0,5))
            setIsComponentVisible(true)
        }).catch((error) => {
            setError(error)
        })
    }

    const renderSuggestions = () => {
        if (isComponentVisible) {
            /* Suggestions may return with nothing, handle an empty list with a "No repositories for this search" response */
            return (
            <div ref={ref}>
                <SuggestionsList>
                    {suggestions.map((suggestion, i) => <Suggestion key={i} repoName={suggestion.full_name} version={suggestion.releases_url}/>)}
                </SuggestionsList>
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
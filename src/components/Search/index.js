import React from "react"
import { Container, Form, Input } from "./styles/search"

function Search({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

Search.Form = function SearchForm({ children, ...otherProps }) {
    return <Form {...otherProps}>{children}</Form>
}

Search.Input = function SearchInput({ children, ...otherProps}) {
    return <Input {...otherProps}>{children}</Input>
}

const SearchBar = ({handleSearch, handleInput, searchText}) => {
    return (
        <Search>
            <Search.Form onSubmit={handleSearch}>
                <Search.Input
                    type="text"
                    name="text"
                    id="searchText"
                    autoComplete="off"
                    placeholder="Find a repository"
                    value={searchText}
                    onChange={handleInput}
                />
            </Search.Form>
        </Search>
    )
}

export default SearchBar
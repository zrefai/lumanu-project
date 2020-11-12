import React from "react"
import { useSelector } from "react-redux"
import { Container } from "./styles/repolist"
import RepoCard from "../RepoCard"

function List ({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

const selectRepos = state => state.repos

const RepoList = () => {
    const repos = useSelector(selectRepos)
    console.log(repos)

    const renderCard = () => {
        return Object.keys(repos).map((key, i) => <RepoCard key={i} repo={repos[key]}/>)
    }
    
    return (
        <List>
            {renderCard()}
        </List>
    )
}

export default RepoList
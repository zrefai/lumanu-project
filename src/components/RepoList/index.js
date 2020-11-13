import React from "react"
import { useSelector } from "react-redux"
import { Container, EmptyList } from "./styles/repolist"
import { selectReposList } from "../../redux/selectors"
import RepoCard from "../RepoCard"

function List ({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

List.EmptyText = function EmptyListText({ children, ...otherProps }) {
    return <EmptyList {...otherProps}>{children}</EmptyList>
}

const RepoList = () => {
    const repos = useSelector(selectReposList)

    const renderCard = () => {
        if (Object.keys(repos).length) return Object.keys(repos).map((key, i) => <RepoCard key={i} repo={repos[key]}/>)
        return <List.EmptyText>You are not tracking any repositories yet</List.EmptyText>
    }
    
    return (
        <List>
            {renderCard()}
        </List>
    )
}

export default RepoList
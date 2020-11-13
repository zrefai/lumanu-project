import React from "react"
import { FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import useRevalidate from "../../hooks/useRevalidate"
import { removeFromRepoList, updateRepoSeen } from "../../redux/actions"
import { 
    Container, 
    InfoContainer,
    InfoHeaderContainer,
    InfoHeaderText,
    InfoBodyContainer,
    InfoBodyText,
    InfoFooterContainer,
    InfoFooterText,
    RemoveButtonContainer, 
    RemoveButton
} from "./styles/repocard"

function Card({ children, ...otherProps }) {
    return <Container {...otherProps}>{children}</Container>
}

Card.Info = function CardInfo({ children, ...otherProps}) {
    return <InfoContainer {...otherProps}>{children}</InfoContainer>
}

Card.InfoHeaderContainer = function CardInfoHeaderContainer({ children, ...otherProps}) {
    return <InfoHeaderContainer {...otherProps}>{children}</InfoHeaderContainer>
}

Card.InfoHeaderText = function CardInfoHeaderText({ children, ...otherProps}) {
    return <InfoHeaderText {...otherProps}>{children}</InfoHeaderText>
}

Card.InfoBodyContainer = function CardInfoBodyContainer({ children, ...otherProps}) {
    return <InfoBodyContainer {...otherProps}>{children}</InfoBodyContainer>
}

Card.InfoBodyText = function CardInfoBodyText({ children, ...otherProps}) {
    return <InfoBodyText {...otherProps}>{children}</InfoBodyText>
}

Card.InfoFooterContainer = function CardInfoFoorterContainer({ children, ...otherProps }) {
    return <InfoFooterContainer {...otherProps}>{children}</InfoFooterContainer>
}

Card.InfoFooterText = function CardInfoFoorterText({ children, ...otherProps }) {
    return <InfoFooterText {...otherProps}>{children}</InfoFooterText>
}

Card.RemoveButtonContainer = function CardRemoveButtonContainer({ children, ...otherProps}) {
    return <RemoveButtonContainer {...otherProps}>{children}</RemoveButtonContainer>
}

Card.RemoveButton = function CardRemoveButton({ children, ...otherProps}) {
    return <RemoveButton {...otherProps}>{children}</RemoveButton>
}

const RepoCard = ({ repo }) => {
    const release_data = repo.latest_release
    const currentReleaseID = release_data ? release_data.id : "00000000"
    const {error} = useRevalidate(repo.owner.login, repo.name, repo.id, currentReleaseID)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleRemoveCard = (e) => {
        e.preventDefault()
        dispatch(removeFromRepoList(repo.id))
    }

    const handleCardOnClick = (e) => {
        e.preventDefault()
        if (!repo.seen) dispatch(updateRepoSeen(repo.id))
        history.push(`/details`, {repoId: repo.id})
    }

    const renderInfoHeader = () => {
        return (
            <Card.InfoHeaderContainer>
                <Card.InfoHeaderText style={{maxWidth: '55%', minWidth: '55%'}}>
                    {repo.full_name}
                </Card.InfoHeaderText>
                <Card.InfoHeaderText style={{ maxWidth: '20%', minWidth: '20%'}}>
                    {release_data ? release_data.tag_name : "N/A"}
                </Card.InfoHeaderText>
                <Card.InfoHeaderText 
                    style={{
                        maxWidth: '20%', 
                        minWidth: '20%',
                        marginRight: '0px'}}>
                    {release_data ? release_data.created_at.split('T')[0] : "N/A"}
                </Card.InfoHeaderText>
            </Card.InfoHeaderContainer>
        )
    }

    const renderInfoBody = () => {
        return (
            <Card.InfoBodyContainer>
                <Card.InfoBodyText>
                    {repo.description}
                </Card.InfoBodyText>
            </Card.InfoBodyContainer>
        )
    }

    const renderInfoFooter = () => {
        return (
            <Card.InfoFooterContainer>
                <Card.InfoFooterText>{repo.language}</Card.InfoFooterText>
                <Card.InfoFooterText>Watchers: {repo.watchers_count}</Card.InfoFooterText>
                <Card.InfoFooterText>Forks: {repo.forks_count}</Card.InfoFooterText>
                <Card.InfoFooterText>Star Gazers: {repo.stargazers_count}</Card.InfoFooterText>
            </Card.InfoFooterContainer>
        )
    }

    const renderRemoveButton = () => {
        return (
            <RemoveButtonContainer>
                <Card.RemoveButton onClick={(e) => handleRemoveCard(e)}><FaTimes/></Card.RemoveButton>
            </RemoveButtonContainer>
        )
    }

    return (
        <Card style={{borderColor: repo.seen ? '#707070' : '#5AFF5A'}}>
            <Card.Info onClick={(e) => handleCardOnClick(e)}>
                {renderInfoHeader()}
                {renderInfoBody()}
                {renderInfoFooter()}
            </Card.Info>
            {renderRemoveButton()}
        </Card>
    )
}

export default RepoCard
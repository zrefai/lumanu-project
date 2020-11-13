import { 
    Container, 
    RepoInfoTextContainer,
    RepoInfoText, 
    ReleaseInfoContainer, 
    ReleaseInfoText
} from "./styles/repodetails"
import ReactMarkdown from 'react-markdown'
import { useSelector } from "react-redux"
import { selectReposList } from "../../redux/selectors"

function Details({ children, ...otherProps }) {
    return <Container {...otherProps}> {children}</Container>
}

Details.IContainer = function DetailsRepoInfoContainer({ children, ...otherProps }) {
    return <RepoInfoTextContainer {...otherProps}>{children}</RepoInfoTextContainer>
}

Details.IText = function DetailsRepoInfo({ children, ...otherProps }) {
    return <RepoInfoText {...otherProps}>{children}</RepoInfoText>
}

Details.RContainer = function DetailsReleaseContainer({ children, ...otherProps }) {
    return <ReleaseInfoContainer {...otherProps}>{children}</ReleaseInfoContainer>
}

Details.RText = function DetailsReleaseText({ children, ...otherProps }) {
    return <ReleaseInfoText {...otherProps}>{children}</ReleaseInfoText>
}

const RepoDetails = ({repoID}) => {
    const repoList = useSelector(selectReposList)

    const renderDetails = () => {
        if (repoID) {
            const repo = repoList[repoID]
            return (
                <Details>
                    <Details.IContainer>
                        <Details.IText>Full Name: {repo.full_name}</Details.IText>
                        <Details.IText>ID: {repo.id}</Details.IText>
                    </Details.IContainer>
                    <Details.IContainer>
                        <Details.IText>Size: {repo.size}</Details.IText>
                        <Details.IText>Language: {repo.language}</Details.IText>
                    </Details.IContainer>
                    <Details.IContainer>
                        <Details.IText>Forks: {repo.forks_count}</Details.IText>
                        <Details.IText>Watchers: {repo.watchers_count}</Details.IText>
                    </Details.IContainer>
                    <div style={{marginTop: '20px'}}>Release notes for version {repo.latest_release ? repo.latest_release.tag_name : "N/A"} on {repo.latest_release ? repo.latest_release.created_at.split('T')[0] : "N/A"}</div>
                    <Details.RContainer>
                        <ReactMarkdown>
                            {repo.latest_release ? repo.latest_release.body : "No release information for this repository"}
                        </ReactMarkdown>
                    </Details.RContainer>
                </Details>
            )
        }
        return <p>Please go back to the home page and select a repository to view</p>
    }

    return renderDetails()
}

export default RepoDetails
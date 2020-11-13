import { Container, RepoInfoTextContainer ,RepoInfoText, ReleaseInfoContainer, ReleaseInfoText} from "./styles/repodetails"


export default function RepoDetails({ children, ...otherProps }) {
    return <Container {...otherProps}> {children}</Container>
}

RepoDetails.RepoInfoContainer = function DetailsRepoInfoContainer({ children, ...otherProps }) {
    return <RepoInfoTextContainer {...otherProps}>{children}</RepoInfoTextContainer>
}

RepoDetails.RepoInfo = function DetailsRepoInfo({ children, ...otherProps }) {
    return <RepoInfoText {...otherProps}>{children}</RepoInfoText>
}

RepoDetails.ReleaseContainer = function DetailsReleaseContainer({ children, ...otherProps }) {
    return <ReleaseInfoContainer {...otherProps}>{children}</ReleaseInfoContainer>
}

RepoDetails.ReleaseText = function DetailsReleaseText({ children, ...otherProps }) {
    return <ReleaseInfoText {...otherProps}>{children}</ReleaseInfoText>
}
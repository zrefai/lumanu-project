import React from "react"
import "./Details.css"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectReposList } from "../../redux/selectors"
import ReactMarkdown from 'react-markdown'
import RepoDetails from "../../components/RepoDetails"

const Details = () => {
    const location = useLocation()
    const repoId = location.state ? location.state.repoId : ""
    const repoList = useSelector(selectReposList)

    const renderDetails = () => {
        const repo = repoList[repoId]
        if (repoId) {
            const repo = repoList[repoId]
            console.log(repo.latest_release)
            return (
                <RepoDetails>
                    <RepoDetails.RepoInfoContainer>
                        <RepoDetails.RepoInfo>Full Name: {repo.full_name}</RepoDetails.RepoInfo>
                        <RepoDetails.RepoInfo>ID: {repo.id}</RepoDetails.RepoInfo>
                    </RepoDetails.RepoInfoContainer>
                    <RepoDetails.RepoInfoContainer>
                        <RepoDetails.RepoInfo>Size: {repo.size}</RepoDetails.RepoInfo>
                        <RepoDetails.RepoInfo>Language: {repo.language}</RepoDetails.RepoInfo>
                    </RepoDetails.RepoInfoContainer>
                    <RepoDetails.RepoInfoContainer>
                        <RepoDetails.RepoInfo>Forks: {repo.forks_count}</RepoDetails.RepoInfo>
                        <RepoDetails.RepoInfo>Watchers: {repo.watchers_count}</RepoDetails.RepoInfo>
                    </RepoDetails.RepoInfoContainer>
                    <div style={{marginTop: '20px'}}>Release notes for version {repo.latest_release ? repo.latest_release.tag_name : "N/A"} on {repo.latest_release ? repo.latest_release.created_at.split('T')[0] : "N/A"}</div>
                    <RepoDetails.ReleaseContainer>
                        <ReactMarkdown>
                            {repo.latest_release ? repo.latest_release.body : "No release information for this repository"}
                        </ReactMarkdown>
                    </RepoDetails.ReleaseContainer>
                </RepoDetails>
            )
        }
        return <p>Please go back to the home page and select a repository to view</p>
    }

return (
    <div className="Details-Container">
        {renderDetails()}
    </div>)
}

export default Details
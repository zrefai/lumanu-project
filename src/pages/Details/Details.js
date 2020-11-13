import React from "react"
import "./Details.css"
import { useLocation } from "react-router-dom"
import RepoDetails from "../../components/RepoDetails"

const Details = () => {
    const location = useLocation()
    const repoID = location.state ? location.state.repoId : ""

    return (
        <div className="Details-Container">
            <RepoDetails repoID={repoID} />
        </div>)
}

export default Details
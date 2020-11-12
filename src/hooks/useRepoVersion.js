import { useState, useEffect } from "react"
import { Octokit } from "@octokit/core"

function useRepoVersion(owner, repoName) {
    const octokit = new Octokit()
    const [repoVersionInfo, setRepoVersionInfo] = useState([])
    const [error, setError] = useState("")

    const fetchRepoVersionInfo = async () => {
        const promise = await octokit.request('GET /repos/{owner}/{repoName}/releases', {owner, repoName})
        try {
            setRepoVersionInfo(promise.data)
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchRepoVersionInfo()
    },[])

    return {repoVersionInfo, error}
}

export default useRepoVersion
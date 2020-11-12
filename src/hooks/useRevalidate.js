import { useState, useEffect } from "react"
import { Octokit } from "@octokit/core"

function useRevalidate(repo) {
    const octokit = new Octokit()
    const [repo, setRepo] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {

    }, [])

    return {repo, error}
}
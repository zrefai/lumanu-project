import { useState, useEffect, useRef } from "react"

function useVisible(startState) {
    const [isComponentVisible, setIsComponentVisible] = useState(startState)
    const ref = useRef(null)

    const handleHideComponent = (e) => {
        if (e.key === "Escape") setIsComponentVisible(false)
    }

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) setIsComponentVisible(false)
    }

    useEffect(() => {
        document.addEventListener("keydown", handleHideComponent, true)
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.addEventListener("keydown", handleHideComponent, true)
            document.addEventListener("click", handleClickOutside, true)
        }
    })

    return {ref, isComponentVisible, setIsComponentVisible}
}

export default useVisible
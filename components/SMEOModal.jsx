"use client"

import { useState } from 'react'

const SMEOModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={"absolute z-50 top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center " + (isOpen ? "flex" : "hidden")} onClick={() => { setIsOpen(!isOpen) }}>
            <div className="w-full max-w-2xl rounded-xl bg-white h-96"></div> 
        </div>
    )
}

export default SMEOModal
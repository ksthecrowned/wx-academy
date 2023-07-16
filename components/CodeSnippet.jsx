import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const CodeSnippet = ({ code, language }) => {
    const [copied, setCopied] = useState(false)

    const handleCopyClick = () => {
        navigator.clipboard.writeText(code)
        .then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
        .catch((error) => {
            console.error('Error copying text:', error)
        })
    }
    return (
        <div className="relative">
            <button onClick={handleCopyClick} className="absolute right-4 top-2">
                {copied ? 'Copié!' : 'Copier'}
            </button>
            <SyntaxHighlighter language={language}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeSnippet

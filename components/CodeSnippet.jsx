import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const CodeSnippet = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language}>
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeSnippet

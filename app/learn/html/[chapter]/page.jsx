"use client"

import { useState, useEffect } from 'react'
import HTMLRenderer from '@components/HTMLRenderer'
import SMEOModal from '@components/SMEOModal'
import CodeSnippet from '@components/CodeSnippet'
import Image from 'next/image'
import { 
    chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, 
    chapter9, chapter10, chapter11, chapter12, chapter13, chapter14, chapter15, 
    chapter16, chapter17, chapter18, chapter19, chapter20, chapter21
} from '@constants/html-course'

const chapters = [ 
    chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7,
    chapter8, chapter9, chapter10, chapter11, chapter12, chapter13, chapter14, 
    chapter15, chapter16, chapter17, chapter18, chapter19, chapter20, chapter21 
]
  
const page = ({ params }) => {
    const [chapter, setChapter] = useState(null)
    useEffect(() => {
        setChapter(chapters.filter(obj => obj.param == 'html/' + params.chapter))
    }, [])
    console.log(chapters)
    return (
        <div className="px-8 h-full overflow-y-auto hidden-scrollbar">
            {
                chapter && chapter.length > 0 
                && chapter[0].content.map((item, index) => {
                    console.log(chapters)
                    if(item.isCode) {
                        return <CodeSnippet key={index} code={item.content} language={item.language} />
                    } else {
                        return <HTMLRenderer key={index} htmlString={item.content} />
                    }
                })
            }
            {
                chapter && chapter.length > 0  && (
                    <div className="my-16 grid grid-cols-3 gap-8">
                        <button className="w-full py-4 px-8 rounded-md bg-black/20 hover:bg-black/10 transition-colors duration-500 flex items-center justify-center gap-2 group">
                            <span className="text-3xl pb-1.5 transform group-hover:-translate-x-2 transition-transform duration-500">«</span> Chapitre précédent
                        </button>
                        <button className="w-full py-4 px-8 rounded-md bg-black/20 hover:bg-black/10 transition-colors duration-500 flex items-center justify-center gap-2 group">
                            Restitution de connaissances
                        </button>
                        <button className="w-full py-4 px-8 rounded-md bg-black/20 hover:bg-black/10 transition-colors duration-500 flex items-center justify-center gap-2 group">
                            Chapitre suivant <span className="text-3xl pb-1.5 transform group-hover:translate-x-2 transition-transform duration-500">»</span>
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default page
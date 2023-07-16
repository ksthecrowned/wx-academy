"use client"

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import learnHtml from '@public/learn-html.webp'

import { 
    chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, 
    chapter9, chapter10, chapter11, chapter12, chapter13, chapter14, chapter15, 
    chapter16, chapter17, chapter18, chapter19, chapter20, chapter21, chapter22
} from '@constants/html-course'

const chapters = [ 
    chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7,
    chapter8, chapter9, chapter10, chapter11, chapter12, chapter13, chapter14, 
    chapter15, chapter16, chapter17, chapter18, chapter19, chapter20, chapter21, chapter22 
]

const ChapterMenu = () => {
    const pathname = usePathname()
    return (
        <aside className="bg-[#191919] col-span-1 rounded-lg overflow-hidden">
            <div className="h-44 w-full border-b-8 border-[#303136]  relative">
                <Image src={learnHtml} fill className="object-cover" alt="Learn HTML" />
                <div className="absolute top-0 w-full h-full bg-black/50"></div>
            </div>
            <ul className="font-medium overflow-y-auto h-full hidden-scrollbar relative">
                {
                    chapters.map(chapter => {
                        return (
                            <li key={chapter.id} className={('/learn/' + chapter.param) != pathname ? "inActiveLi hover:bg-orange-600/5 group" : "activeLi"}>
                                <a href={chapter.param}  className={('/learn/' + chapter.param) != pathname ? "inActiveLink" : "activeLink"}>
                                    {chapter.title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default ChapterMenu
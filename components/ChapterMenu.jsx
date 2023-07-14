"use client"

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import learnHtml from '@public/learn-html.webp'

const ChapterMenu = ({ chapters }) => {
    const pathname = usePathname()
    return (
        <aside className="bg-[#191919] col-span-1 rounded-lg overflow-hidden">
            <div className="h-44 w-full border-b-8 border-[#303136]  relative">
                <Image src={learnHtml} fill className="object-cover" alt="Learn HTML" />
                <div className="absolute top-0 w-full h-full bg-black/50"></div>
            </div>
            <ul className="font-medium overflow-y-auto h-full hidden-scrollbar relative">
                {
                    chapters.map((chapter, index) => {
                        return (
                            <li key={index} className={('/learn/' + chapter.url) != pathname ? "inActiveLi hover:bg-orange-600/5 group" : "activeLi"}>
                                <a href={chapter.url}  className={('/learn/' + chapter.url) != pathname ? "inActiveLink" : "activeLink"}>
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
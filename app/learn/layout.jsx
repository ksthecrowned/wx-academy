import Image from 'next/image'
import ChapterMenu from '@components/ChapterMenu'
import logoWebtinix from '@public/webtinix-logo.png'
import logoWXacademy from '@public/wx-academy-logo.png'

export const metadata = {
    title: 'Cours Webtinix Academy',
    description: 'Cours Webtinix Academy',
}

const chapters = [
    {
        title: 'Apprendre le HTML',
        url: 'apprendre-le-html'
    },
    {
        title: 'Apperçu général',
        url: 'appercu-general'
    },
    {
        title: 'Structure du document',
        url: 'structure-du-document'
    },
    {
        title: 'Les méta données',
        url: 'les-meta-donnees'
    }
]

const layout = ({ children }) => {

    return (
        <div className="bg-[#303136]">
            <div className="h-screen grid grid-cols-5 max-w-8xl w-full mx-auto gap-2 p-2 text-gray-400">
                <ChapterMenu chapters={chapters} />
                <section className="learn-h col-span-3 bg-[#202124] p-6 shadow-xl rounded-lg">
                    {children}
                </section>
                <aside className="col-span-1 overflow-hidden flex flex-col gap-4">
                    <div className="w-full grid grid-cols-2 gap-2 relative p-2 rounded-lg bg-gray-300">
                        <Image src={logoWebtinix} className="object-contain object-center h-full p-3 rounded-lg" alt="logo Webtinix" />
                        <Image src={logoWXacademy} className="object-contain object-center h-full p-3 rounded-lg" alt="logo Webtinix" />
                    </div>
                    <div className="bg-[#191919] rounded-lg flex flex-col items-center py-8 px-6">
                        <div className="h-36 w-36 rounded-full bg-white"></div>
                        <h3 className="my-4">John Doe</h3>
                        <p className="my-0">Directeur général à Webtinix</p>
                        <p className="my-0">Developpeur Back-end / Formateur</p>
                    </div>
                    <div className="bg-[#191919] rounded-lg h-52"></div>
                </aside>
            </div>
        </div>
    )
}

export default layout
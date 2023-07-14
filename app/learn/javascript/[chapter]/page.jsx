"use client"

import HTMLRenderer from '@components/HTMLRenderer'
import SMEOModal from '@components/SMEOModal'
import CodeSnippet from '@components/CodeSnippet'
import Image from 'next/image'

const content = [
    {
        content: "<h1>Apprendre le HTML</h1>",
        isCode: false,
        language: "",
    },
    {
        content: "<p>Ce cours de HTML pour les développeurs web offre une solide vue d'ensemble pour les développeurs, du niveau zéro au niveau héros en HTML.</p>",
        isCode: false,
        language: "",
    },
    {
        content: "<h2>Bienvenue à ce cours de HTML !</h2>",
        isCode: false,
        language: "",
    },
    {
        content: "<p>Bienvenue au HTML ! Le langage de balisage hypertexte, ou HTML, est l'épine dorsale du web. Il fournit le contenu, ainsi que la structure de ce contenu, que vous voyez s'afficher dans votre navigateur web.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Unless you're reading a PDF or a printed version of this page, this content is made up of various HTML elements and text. HTML is the content layer of the web. HTML elements are the nodes that make up the Document Object Model.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Les feuilles de style en cascade fournissent l'aspect et la convivialité, ou la couche de présentation de la page. JavaScript est la couche comportementale, souvent utilisée pour manipuler les objets au sein d'un document. Les sites construits avec des frameworks JavaScript ne font en réalité que manipuler du HTML. Il est donc important de baliser votre HTML de manière à ce que les scripts puissent facilement l'analyser et que les technologies d'assistance puissent facilement le comprendre. Cela signifie qu'il faut écrire le code HTML en respectant les normes modernes.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h2>Overview</h2>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Ce cours de HTML pour les développeurs web offre une solide vue d'ensemble pour les développeurs, du niveau novice au niveau expert en HTML. Si vous êtes totalement novice en HTML, vous apprendrez à construire un contenu structurellement solide. Si vous construisez des sites web depuis des années, ce cours peut combler des lacunes que vous ne soupçonniez même pas.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Tout au long de ce voyage, nous construirons la structure de MachineLearningWorkshop.com. Aucune machine n'a été blessée lors de la création de cette série.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p><b>Il ne s'agit pas d'une référence exhaustive.</b> Chaque section présente le sujet de la section avec de brèves explications et des exemples, vous donnant l'occasion de l'explorer plus avant. Il y aura des liens vers des références thématiques, telles que les spécifications MDN et WHATWG, et d'autres articles de web.dev. Bien qu'il ne s'agisse pas d'un cours sur l'accessibilité, chaque section comprendra les meilleures pratiques en matière d'accessibilité et des questions spécifiques, avec des liens vers des approfondissements sur le sujet. Chaque section comportera une courte évaluation pour aider les participants à confirmer leur compréhension.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>vue d'ensemble sur le HTML</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Une brève introduction aux concepts clés du HTML.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Structure du document</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Apprenez à structurer vos documents HTML sur des bases solides.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Les balises méta</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Comment utiliser les balises méta pour fournir des informations sur vos documents.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>La sémantique HTML</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Utiliser les bons éléments HTML pour décrire le contenu de votre document.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Les titres et sections</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Comment utiliser correctement les éléments de sectionnement pour donner du sens à votre contenu.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Les attributs</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Découvrez les différents attributs globaux ainsi que les attributs spécifiques à des éléments HTML particuliers.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Les bases du texte</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Comment mettre en forme du texte avec le HTML.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Les liens</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Tout ce que vous devez savoir sur les liens.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Les listes</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Listes et autres moyens de regrouper votre contenu.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>La navigation</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>La navigation est un élément clé de tout site ou application, et elle commence par le langage HTML.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Les tableaux</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Comprendre comment utiliser les tableaux pour baliser les données tabulaires.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Les formulaires</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Une vue d'ensemble des formulaires en HTML.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Les images</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Une vue d'ensemble des images en HTML.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Audio et vidéo</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Découvrez comment travailler avec des médias HTML tels que l'audio et la vidéo.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Template, slot, and shadow</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Explication des notions de modèle, de fente et d'ombre.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>API HTML</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Apprenez comment les informations HTML peuvent être exposées et manipulées à l'aide de JavaScript.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Focus</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Comment gérer l'ordre des priorités dans vos documents HTML.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Autres éléments de texte en ligne</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Introduction à la gamme d'éléments utilisés pour baliser un texte.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Détails et résumé</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Découvrez comment fonctionnent les éléments très utiles que sont les détails et les résumés, et où les utiliser.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>L'élément Dialog</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>L'élément <!--<dialog>--> est un élément utile pour représenter tout type de dialogue en HTML.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h3><a href='#'>Conclusion et prochaines étapes</a></h3>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Pour conclure, quelques ressources supplémentaires.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Alors, êtes-vous prêt à apprendre le langage HTML ? Commençons par le début.</p>",
        isCode: false,
        language: ""
    },
    // {
    //     content: "<iframe class='w-full h-96' src='https://codepen.io/web-dot-dev/embed/VwxzBLq?height=500&theme-id=dark&default-tab=html%2Cresult&editable=true' frameBorder='0'></iframe>",
    //     isCode: false,
    //     language: "",
    // },
]
  
const page = () => {
    return (
        <div className="px-8 h-full overflow-y-auto hidden-scrollbar">
            {
                content.map(item => {
                    if(item.isCode) {
                        return <CodeSnippet code={item.content} language={item.language} />
                    } else {
                        return <HTMLRenderer htmlString={item.content} />
                    }
                })
            }
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
        </div>
    )
}

export default page
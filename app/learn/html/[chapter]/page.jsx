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
        content: "<p>À moins que vous ne lisiez un PDF ou une version imprimée de cette page, ce contenu est constitué de divers éléments HTML et de texte. Le HTML est la couche de contenu du web. Les éléments HTML sont les nœuds qui composent le modèle d'objet de document.</p>",
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
        content: "<h3><a href='#'>Vue d'ensemble sur le HTML</a></h3>",
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

const chapter2 = [
    {
        content: "<h1>Aperçu sur le HTML.</h1>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Une brève introduction aux concepts clés du HTML.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Le langage de balisage hypertexte, ou HTML, est le langage de balisage standard pour décrire la structure des documents affichés sur le web. Le HTML consiste en une série d'éléments et d'attributs utilisés pour baliser tous les composants d'un document afin de le structurer de manière significative.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Les documents HTML sont essentiellement un arbre de nœuds, comprenant des éléments HTML et des nœuds de texte. Les éléments HTML fournissent la sémantique et la mise en forme des documents, y compris la création de paragraphes, de listes et de tableaux, et l'intégration d'images et de contrôles de formulaires. Chaque élément peut avoir plusieurs attributs spécifiés. De nombreux éléments peuvent avoir un contenu, y compris d'autres éléments et du texte. D'autres éléments sont vides, la balise et les attributs définissant leur fonction.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Il existe plusieurs catégories d'éléments, notamment les métadonnées, les sections, le texte, la sémantique en ligne, les formulaires, les éléments interactifs, les médias, les composants et les scripts. Nous aborderons la plupart de ces catégories dans cette série. Mais d'abord, qu'est-ce qu'un élément ?</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h2>Les éléments HTML</h1>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>Le langage HTML se compose d'une série d'éléments que vous utilisez pour entourer, ou envelopper, différentes parties du contenu afin de le faire apparaître ou agir d'une certaine manière. Les éléments HTML sont délimités par des balises, écrites à l'aide de chevrons (<pre class='inline'><</pre> et <pre class='inline'>></pre>).</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>Le titre de notre page est un titre de niveau 1, pour lequel nous utilisons la balise <pre class='inline'>&lt;h1&gt;</pre>. Le titre proprement dit, \"Atelier d'apprentissage automatique\", est le contenu de notre élément. Le contenu se trouve entre les balises d'ouverture et de fermeture. L'ensemble - la balise ouvrante, la balise fermante et le contenu - constitue l'élément.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<div class='my-3 -mx-1'><img src='https://web-dev.imgix.net/image/kheDArv5csY6rvQUJDbWRscckLr1/oyFzeg8ttK57XMGuVNvG.png?auto=format&w=845' /></div>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>La balise fermante est la même balise que la balise ouvrante, précédée d'une barre oblique.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>Les éléments et les balises ne sont pas exactement la même chose, bien que de nombreuses personnes utilisent ces termes de manière interchangeable. Le nom de la balise est le contenu entre les crochets. La balise comprend les crochets. Dans ce cas, <pre class='inline'>&lt;h1&gt;</pre>. Un \"élément HTML\" est constitué de balises ouvrante et de fermante, et tout son contenu se place entre ces balises, y compris les éléments imbriqués.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Ce paragraphe contient du contenu \n\t<strong><em>fortement accentué</em></strong>\n</p>",
        isCode: true,
        language: "html"
    },
    {
        content: "<div>Cet élément de paragraphe est imbriqué dans d'autres éléments.Lors de l'imbrication d'éléments, il est important qu'ils soient correctement imbriqués.Les balises HTML doivent être fermées dans l'ordre inverse de leur ouverture.Dans l'exemple ci-dessus, vous remarquerez que le <pre class='inline'>&lt;em&gt;</pre> est à la fois ouvert et fermé à l'intérieur des balises <pre class='inline'>&lt;strong&gt;</pre> d'ouverture et de fermeture,et le <pre class='inline'>&lt;strong&gt;</pre> est à la fois ouvert et fermé à l'intérieur des balises <pre class='inline'>&lt;p&gt;</pre>.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Les navigateurs n'affichent pas les balises. Les balises sont utilisées pour interpréter le contenu de la page.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>HTML est très, très indulgent. Par exemple, si nous omettons les balises de fermeture <pre class='inline'>&lt;/li&gt;</pre>, les balises de fermeture sont implicites.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<ul>\n\t<li>Blendan Smooth\n\t<li>Hoover Sukhdeep\n\t<li>Toasty McToastface\n</ul>",
        isCode: true,
        language: "html"
    },
    {
        content: "<div>Bien qu'il soit possible de ne pas fermer un <pre class='inline'>&lt;li&gt;</pre>, ce n'est pas une bonne pratique. La terminaison <pre class='inline'>&lt;/ul&gt;</pre> est obligatoire. Si la balise de fermeture de la liste non ordonnée est omise, le navigateur tentera de déterminer où se terminent la liste et les éléments de la liste, mais il se peut que vous ne soyez pas d'accord avec cette décision.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>La spécification de chaque élément indique si la balise de fermeture est obligatoire ou non. La mention \"Aucune balise n'est admissible\" dans la spécification signifie qu'une balise d'ouverture et une balise de fermeture sont toutes deux nécessaires. La <a href='https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-omission'>spécification fournit une liste de toutes les balises de fermeture requises</a>.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>Si le <pre class='inline'>&lt;em&gt;</pre> ou le <pre class='inline'>&lt;strong&gt;</pre> de l'exemple précédent n'a pas été fermé, le navigateur peut ou non fermer l'élément pour vous. Le fait de ne pas fermer un <pre class='inline'>&lt;em&gt;</pre> conduit simplement à ce que le contenu soit rendu différemment de ce que vous aviez prévu.  Si un <pre class='inline'>&lt;/ul&gt;</pre> est omis et que la balise suivante est une balise de fermeture du conteneur parent de la liste, vous avez de la chance. En revanche, s'il s'agit d'une balise d'ouverture <pre class='inline'>&lt;h1&gt;</pre>, le navigateur considérera que l'en-tête fait partie de la liste et qu'il en hérite les styles. L'omission de certaines balises de fermeture entraîne des problèmes plus importants : le fait de ne pas fermer certaines balises, telles que <pre class='inline'>&lt;script&gt;</pre>, <pre class='inline'>&lt;style&gt;</pre>, <pre class='inline'>&lt;template&gt;</pre>, <pre class='inline'>&lt;textarea&gt;</pre> et <pre class='inline'>&lt;title&gt;</pre>, interrompt le contenu ultérieur, comme le montre l'exemple suivant.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<iframe class='w-full h-96' src='https://codepen.io/web-dot-dev/embed/VwxzBLq?height=500&theme-id=dark&default-tab=html%2Cresult&editable=true' frameBorder='0'></iframe>",
        isCode: false,
        language: "",
    },
    {
        content: "<div>Le fait qu'une partie du contenu soit involontairement en italique ou qu'un titre soit en retrait ne détruira pas votre entreprise. Le fait que la majeure partie de votre contenu apparaisse sans style dans une zone de texte de 200x300 parce que vous avez oublié d'ajouter un <pre class='inline'>&lt;/textarea&gt;</pre> ou qu'il n'apparaisse pas du tout parce que vous avez oublié de fermer un <pre class='inline'>&lt;/style&gt;</pre> rend le site inutilisable.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>Dans certains cas, les navigateurs incluent des éléments même si les balises ne sont pas présentes dans le balisage. Comme les éléments peuvent être implicites, un élément peut exister même si les balises n'existent pas. Le navigateur ajoutera un <pre class='inline'>&lt;body&gt;&lt;/body&gt;</pre> autour de votre contenu et <pre class='inline'>&lt;tbody&gt;&lt;/tbody&gt;</pre> autour des lignes de votre tableau, même si vous ne le faites pas. Cela dit, s'il est possible d'omettre des balises, il ne faut pas le faire. En outre, comme nous l'avons déjà mentionné, veillez à ce qu'elles soient correctement imbriquées. Votre futur responsable de la maintenance du balisage, et toute personne travaillant sur votre base de code, vous en remerciera.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Il existe deux types d'éléments : les éléments remplacés et les éléments non remplacés.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h2>Les éléments non remplacés</h2>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Les éléments paragraphe, titre et les listes sont tous des éléments non remplacés. Les éléments non remplacés sont entourés de balises ouvrante et (parfois facultatives) de fermante et peuvent inclure du texte et d'autres balises en tant que sous-éléments. Ces balises englobantes peuvent transformer une phrase ou une image en lien hypertexte, transformer une phrase en en-tête, mettre des mots en valeur, etc.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h2>Les éléments remplacés et vides</h2>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Les éléments remplacés le sont par des objets, qu'il s'agisse d'un widget d'interface utilisateur graphique (UI) dans le cas de la plupart des contrôles de formulaires, ou d'un fichier d'image matricielle ou modulable dans le cas de la plupart des images. Les objets étant remplacés par des objets, chacun d'entre eux a une apparence par défaut. Selon le type d'objet et le navigateur, les styles applicables sont limités. Par exemple, la plupart des navigateurs permettent de limiter le style des widgets de l'interface utilisateur et des pseudo-éléments associés. Dans le cas des images matricielles, la hauteur, la largeur, l'écrêtage et le filtrage sont facilement réalisables avec CSS, mais il n'y a pas grand-chose d'autre. En revanche, les graphiques vectoriels évolutifs, qui utilisent un langage de balisage basé sur XML similaire à HTML, sont entièrement évolutifs (à moins qu'ils ne contiennent des images matricielles). Ils sont également entièrement stylisables. Notez que la possibilité de styliser un SVG incorporé à partir du CSS lié au fichier HTML qui l'incorpore dépend de la manière dont le SVG est configuré.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>Dans cet exemple, les deux éléments remplacés <pre class='inline'>&lt;img&gt;</pre> et <pre class='inline'>&lt;input&gt;</pre> sont remplacés par du contenu non textuel : une image et un objet d'interface utilisateur graphique, respectivement.</div>",
        isCode: false,
        language: ""
    },
    {
        content: '<input type="range">\n<img src="switch.svg" alt="light switch">',
        isCode: true,
        language: "html"
    },
    {
        content: "<p>Résultat du code HTML ci-dessus :</p>",
        isCode: false,
        language: ""
    },
    {
        content: '<input type="range">\n<img src="switch.svg" alt="light switch">',
        isCode: false,
        language: ""
    },
    {
        content: "Les éléments remplacés et les éléments vides sont souvent confondus. Les éléments vides sont tous des éléments à fermeture automatique et sont représentés par une seule balise. Cela signifie qu'il n'existe pas de balise de fermeture pour un élément void. Il est possible d'inclure une barre oblique à la fin de la balise, ce qui, pour beaucoup, facilite la lecture des balises. Pour continuer avec cet exemple, nous fermons nous-mêmes la balise avec une barre oblique :",
        isCode: false,
        language: ""
    },
    {
        content: '<input type="range"/>\n<img src="switch.svg" alt="light switch"/>',
        isCode: true,
        language: "html"
    },
    {
        content: "<p>Le slash final est old school : c'est une façon d'indiquer que l'élément se ferme de lui-même et qu'il n'y aura pas de balise de fin ou de fermeture correspondante.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>Les éléments vides ne peuvent pas contenir de texte ni d'éléments imbriqués. Parmi ces éléménts nous avons <pre class='inline'>&lt;br&gt;</pre>, <pre class='inline'>&lt;col&gt;</pre>, <pre class='inline'>&lt;embed&gt;</pre>, <pre class='inline'>&lt;hr&gt;</pre>, <pre class='inline'>&lt;img&gt;</pre>, <pre class='inline'>&lt;input&gt;</pre>, <pre class='inline'>&lt;link&gt;</pre>, <pre class='inline'>&lt;meta&gt;</pre>, <pre class='inline'>&lt;source&gt;</pre>, <pre class='inline'>&lt;track&gt;</pre>, <pre class='inline'>&lt;wbr&gt;</pre>, et bien d'autres.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>La plupart des éléments remplacés sont des éléments vides, mais pas tous. Les éléments <pre class='inline'>video</pre>, <pre class='inline'>picture</pre>, <pre class='inline'>object</pre> et <pre class='inline'>iframe</pre> sont remplacés, mais ne sont pas vides. Elles peuvent toutes contenir d'autres éléments ou du texte, c'est pourquoi elles ont toutes une balise de fermante.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>La plupart des éléments void sont remplacés, mais pas tous, comme nous l'avons vu avec <pre class='inline'>base</pre>, <pre class='inline'>link</pre>, <pre class='inline'>param</pre> et <pre class='inline'>meta</pre>. Pourquoi avoir un élément vide, qui ne peut pas avoir de contenu, qui n'est pas remplacé et qui ne rend donc rien à l'écran ? Pour fournir des informations sur le contenu ! Les informations sont fournies par les attributs des éléments.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<h2>Les attributs</h2>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>Vous avez peut-être remarqué que les exemples <pre class='inline'>&lt;img&gt;</pre> et <pre class='inline'>&lt;input&gt;</pre> contenaient plus que le type d'élément dans leur balise d'ouverture. Ces éléments supplémentaires de paires nom/valeur séparées par des espaces (bien que l'inclusion d'une valeur soit parfois facultative) sont appelés attributs. C'est grâce aux attributs que le langage HTML est si incroyablement puissant. Nous aborderons des centaines d'attributs et de valeurs d'attributs dans cette série, mais nous nous contenterons ici de parler de ce qu'ils sont en général et de la manière de les inclure.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Les attributs fournissent des informations sur l'élément. Les attributs, comme le reste de la balise d'ouverture, n'apparaîtront pas dans le contenu, mais ils aident à définir la façon dont le contenu apparaîtra aux utilisateurs voyants et non voyants (technologies d'assistance et moteurs de recherche).</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Les attributs n'apparaissent que dans la balise d'ouverture. La balise d'ouverture commence toujours par le type de l'élément. Le type peut être suivi de zéro ou plusieurs attributs, séparés par un ou plusieurs espaces. La plupart des noms d'attributs sont suivis d'un signe égal à la valeur de l'attribut, entre guillemets ouvrants et fermants.</p>",
        isCode: false,
        language: ""
    },
    {
        content: '<div class="my-3 -mx-1"><img src="https://web-dev.imgix.net/image/kheDArv5csY6rvQUJDbWRscckLr1/IdGp51MB61yo6WDSRZZ3.png?auto=format&w=845" /></div>',
        isCode: false,
        language: ""
    },
    {
        content: "<div>Dans cet exemple, nous avons un lien d'ancrage avec deux attributs. Ces deux attributs ont converti le contenu \"Enregistrement\" en un lien d'ancrage interne qui défile jusqu'à l'attribut <pre class='inline'>id=\"register\"</pre> dans l'onglet actuel du navigateur lorsque le lien est cliqué, tapé ou activé à l'aide du clavier ou d'un autre dispositif.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Les attributs définissent le comportement, les liens et les fonctionnalités des éléments. Nous aborderons d'autres attributs dans la section Attributs de cette série. Pour l'instant, notez simplement que certains attributs sont globaux, c'est-à-dire qu'ils peuvent apparaître dans la balise d'ouverture de n'importe quel élément. D'autres ne s'appliquent qu'à plusieurs éléments, mais pas à tous, et d'autres encore sont spécifiques à un élément, c'est-à-dire qu'ils ne s'appliquent qu'à un seul élément.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>La plupart des attributs sont des paires nom/valeur. Les attributs booléens, dont la valeur est true, false ou identique au nom de l'attribut, peuvent être inclus en tant qu'attribut seul : la valeur n'est pas nécessaire.</p>",
        isCode: false,
        language: ""
    },
    {
        content: '<img src="switch.svg" alt="light switch" ismap />',
        isCode: true,
        language: "html"
    },
    {
        content: "<div>Cette image possède trois attributs : <pre class='inline'>src</pre>, <pre class='inline'>alt</pre> et <pre class='inline'>ismap</pre>. L'attribut <pre class='inline'>src</pre> est utilisé pour indiquer l'emplacement de l'image SVG. L'attribut <pre class='inline'>alt</pre> fournit un texte alternatif décrivant le contenu de l'image. L'attribut <pre class='inline'>ismap</pre> est booléen et ne nécessite pas de valeur. Il s'agit simplement d'expliquer ce que sont les attributs. Nous aborderons ces attributs plus en détail dans la section consacrée aux images.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Bien que la mise entre guillemets des attributs ne soit pas toujours nécessaire, elle l'est parfois. Si la valeur comprend un espace ou des caractères spéciaux, des guillemets sont nécessaires. C'est pourquoi il est toujours recommandé de les mettre entre guillemets. Un ou plusieurs espaces entre les attributs si la valeur de l'attribut est citée ne sont pas nécessaires, mais, par sécurité et pour des raisons de lisibilité, les guillemets et les espaces sont recommandés et appréciés.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>Le langage HTML n'est pas sensible à la casse, mais certaines valeurs d'attributs le sont. Les valeurs définies dans la spécification ne sont pas sensibles à la casse. Les chaînes de caractères qui ne sont pas définies comme des mots-clés sont généralement sensibles à la casse, y compris les valeurs <pre class='inline'>id</pre> et <pre class='inline'>class</pre>.</div>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Notez que si une valeur d'attribut est sensible à la casse en HTML, elle l'est également lorsqu'elle est utilisée dans le cadre d'un sélecteur d'attribut en CSS et en JavaScript.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Pour faciliter la lecture des balises, il est recommandé, mais pas obligatoire, de baliser votre HTML en utilisant des lettres minuscules pour tous les noms d'éléments et d'attributs à l'intérieur de vos balises, et de mettre entre guillemets toutes les valeurs d'attributs. Si vous entendez un jour l'expression \"balisage de style XHTML\", c'est ce que cela signifie, ainsi que les éléments vides à fermeture automatique avec une barre oblique à la fin.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<h2>Apparence des éléments</h2>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>L'apparence par défaut des éléments sémantiques est définie par les feuilles de style des agents utilisateurs (navigateurs). La plupart des navigateurs utilisent des feuilles de style réelles à cette fin, tandis que d'autres les simulent dans le code. Le résultat final est le même. Bien que certaines contraintes sur les feuilles de style des agents utilisateurs soient fixées par la spécification HTML, les navigateurs disposent d'une grande latitude, ce qui signifie qu'il existe des différences entre les navigateurs.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>L'élément que vous choisissez, et donc les balises que vous utilisez, doivent être adaptés au contenu que vous affichez, car les balises ont une signification sémantique. La sémantique, ou le <pre class='inline'>role</pre>, d'un élément est importante pour les technologies d'assistance et, dans certains cas, pour les moteurs de recherche. Le langage HTML doit être utilisé pour structurer le contenu et non pour en définir l'apparence. L'apparence est du ressort de CSS. Bien que de nombreux éléments qui modifient l'apparence du contenu, tels que <pre class='inline'>&lt;h1&gt;</pre>, <pre class='inline'>&lt;strong&gt;</pre> et <pre class='inline'>&lt;em&gt;</pre> aient une signification sémantique, l'apparence peut être et sera généralement modifiée par les styles d'auteur.</div>",
        isCode: false,
        language: ""
    },
    {
        content: '<h1>This header has both <strong>strong</strong> and <em>emphasized</em> content</h1>',
        isCode: true,
        language: "html"
    },
    {
        content: "<h2>Éléments, attributs et JavaScript</h2>",
        isCode: false,
        language: ""
    },
    {
        content: "<p>Le modèle d'objet de document (DOM) est la représentation des données de la structure et du contenu du document HTML. Lorsque le navigateur analyse le HTML, il crée un objet JavaScript pour chaque élément et chaque section de texte rencontrés. Ces objets sont appelés respectivement nœuds - nœuds d'élément et nœuds de texte.</p>",
        isCode: false,
        language: ""
    },
    {
        content: "<div>Il existe une interface pour définir la fonctionnalité de chaque élément HTML. L'API HTML DOM permet d'accéder à chaque élément HTML et de le contrôler via le DOM, en fournissant des interfaces pour l'élément HTML et toutes les classes HTML qui en héritent. L'interface HTMLElement représente l'élément HTML et tous ses nœuds descendants. Tous les autres éléments l'implémentent via une interface qui en hérite. Chaque interface héritée possède un constructeur, des méthodes et des propriétés. Grâce aux propriétés HTMLElement héritées, vous pouvez accéder à tous les attributs globaux, ainsi qu'aux événements <pre class='inline'>input</pre>, <pre class='inline'>pointer</pre>, <pre class='inline'>transition</pre> et <pre class='inline'>animation</pre>. Le sous-type de l'élément individuel, tel que HTMLAnchorElement et HTMLImageElement, vous permet d'accéder aux valeurs et aux méthodes des attributs spécifiques à l'élément.</div>",
        isCode: false,
        language: ""
    },
    // {
    //     content: "<p>Résultat du code HTML ci-dessus :</p>",
    //     isCode: false,
    //     language: ""
    // },
    // {
    //     content: "<p>Résultat du code HTML ci-dessus :</p>",
    //     isCode: false,
    //     language: ""
    // },
]
  
const page = () => {
    return (
        <div className="px-8 h-full overflow-y-auto hidden-scrollbar">
            {
                chapter2.map((item, index) => {
                    if(item.isCode) {
                        return <CodeSnippet key={index} code={item.content} language={item.language} />
                    } else {
                        return <HTMLRenderer key={index} htmlString={item.content} />
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
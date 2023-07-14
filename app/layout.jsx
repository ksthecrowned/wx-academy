import '@styles/globals.css'

export const metadata = {
    title: 'Cours Webtinix Academy',
    description: 'Cours Webtinix Academy',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className="">
                <main className="">
                    {children}
                </main>
            </body>
        </html>
    )
}

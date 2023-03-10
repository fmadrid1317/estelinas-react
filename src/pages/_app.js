import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps, title="Velvet by Luis"}) {
    return(
        <>
        <Head>
            <title>{title}</title>
        </Head>
        <Component {...pageProps} />
        </>
    )
}

export default MyApp
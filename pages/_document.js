import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Yousif's Resume" />
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                    />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
                    <script
                        src="https://kit.fontawesome.com/2ac16e2682.js"
                        crossOrigin="anonymous"
                    ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

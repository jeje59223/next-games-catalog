import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;

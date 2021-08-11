import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Mydocument extends Document {

	render() {
		return (
			<Html lang="pt-br">
				<Head>
                    {/* <link rel="shortcut icon" href="/favicon.svg" /> */}
                    <meta charSet="utf-8" />
                    <meta name="language" content="pt-BR" />
                    <meta name="description" content="Portfólio de Franklin Regis" />
                    <meta name="author" content="Franklin Regis de Oliveira" />
                </Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
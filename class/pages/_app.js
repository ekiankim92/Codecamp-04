import '../styles/globals.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://example.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache()
  })

  // http://backend04.codebootcamp.co.kr/graphql
  //'http://example.codebootcamp.co.kr/graphql'


  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    )
}

export default MyApp

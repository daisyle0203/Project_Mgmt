import Header from "./components/Header"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Client from "./components/Client"

// Create an Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Client />
        </div>
      </ApolloProvider>
    </>
  )
}

export default App

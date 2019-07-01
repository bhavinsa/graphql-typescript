import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import { Employees } from "../src/components/Employees";

import AddEmployee from "../src/components/AddEmployee";


const client = new ApolloClient({
  uri: 'http://localhost:4000'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <p style={{textAlign:'left'}}>Data from Graphql </p>
      <Employees />
      <AddEmployee />
    </div>
    </ApolloProvider>
  );
}

export default App;

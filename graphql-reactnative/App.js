import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';


const Stack = createNativeStackNavigator();

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
        

      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>

  );
}

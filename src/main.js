import './assets/main.css';

import { createApp, provide, h } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import money from 'v-money3';
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';

const pinia = createPinia();

const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },

    render: () => h(App),
});
app.use(pinia);
app.use(money);
app.mount('#app');

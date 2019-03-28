import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShareAlt,faSearch } from '@fortawesome/free-solid-svg-icons';
import Layout from './Layout';

library.add(faSearch);
library.add(faShareAlt);

const Home = () => <Layout />


export default Home;
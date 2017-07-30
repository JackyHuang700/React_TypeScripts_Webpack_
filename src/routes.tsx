import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';

//路徑
import { Home } from './components/Home';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';

export const routes = <Layout>
   <Route exact path='/' component={ Home } />
</Layout>;


//   <Route path='/counter' component={ Counter } />
    // <Route path='/fetchdata' component={ FetchData } />
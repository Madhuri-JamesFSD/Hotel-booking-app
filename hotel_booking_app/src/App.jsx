import React,{ lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoadingSkeleton from './components/LoadingSkeleton';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
  
//const Home = lazy(() => import('./pages/Home'));
//const NotFound = lazy(() => import('./pages/NotFound'));
const HotelInfo = lazy(() => import('./pages/HotelInfo'));

const QueryClient = new QueryClient();

function App() {
  return (
    // <Suspense fallback ={<LoadingSkeleton />}>
      <BrowserRouter>
        <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:slug" element={<HotelInfo />} />
        <Route path="*" element={<NotFound />} />
        </Switch>
      </BrowserRouter>
    // </Suspense>
  );
}

export default App;
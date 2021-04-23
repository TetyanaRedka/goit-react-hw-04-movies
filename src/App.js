import React, { Suspense, lazy } from 'react';
// import { useEffect, useState } from 'react';

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
// import HomePage from './components/HomePage/HomePage';
// import MoviesPage from './components/MoviesPage/MoviesPage';
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

// import NotFoundView from './components/NotFoundView/NotFoundView';
// import { getGenres } from './servises/movies-api';

const HomePage = lazy(() => import('./views/HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage.js'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage/MovieDetailsPage.js'));
const NotFoundView = lazy(() => import('./components/NotFoundView/NotFoundView.js'));

function App() {
  // const [genres, setGenres] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(async () => {
  //   try {
  //     const res = await getGenres();
  //     setGenres(res);
  //   } catch (error) {
  //     setError(error);
  //   }
  // }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>...</h1>}>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/movies/:movieId" render={routerProps => <MovieDetailsPage {...routerProps} />} />
          <Route path="/movies" component={MoviesPage} />

          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

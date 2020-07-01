import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import Navigation from './navigation/Navigation';

const AsyncHomePage = lazy(() =>
  import('../views/home/HomePage' /* webpackChunkName: "HomePage" */),
);
const AsyncMoviesPage = lazy(() =>
  import('../views/movies/Movies' /* webpackChunkName: "MoviesPage" */),
);
const AsyncMovieDetailsPage = lazy(() =>
  import(
    '../views/movieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const AsyncNotFoundPage = lazy(() =>
  import('../views/notFound/NotFound' /* webpackChunkName: "NotFoundPage" */),
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={AsyncHomePage} />
          <Route path={routes.moviesPage} component={AsyncMoviesPage} />
          <Route
            path={routes.movieDetailsPage}
            component={AsyncMovieDetailsPage}
          />
          <Route component={AsyncNotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

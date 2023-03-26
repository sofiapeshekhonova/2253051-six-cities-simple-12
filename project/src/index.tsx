import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { reviews, nearPlaceCards } from './components/mocks/mocks';
import { store } from './store';
import { fetchHotelsAction } from 'store/api-actions';

store.dispatch(fetchHotelsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} nearPlaceCards={nearPlaceCards} />
      {/* <App cards={cards} reviews={reviews} nearPlaceCards={nearPlaceCards} /> */}
    </Provider>
  </React.StrictMode>,
);

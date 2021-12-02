import { createStore } from 'easy-peasy';
// import { composeWithDevTools } from 'remote-redux-devtools';
import model from './model';

const store = createStore(model);

// Wrapping dev only code like this normally gets stripped out by bundlers
// such as Webpack when creating a production build.
if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./model", () => {
      store.reconfigure(model);  // 👈 Here is the magic
    });
  }
}

export default store;
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "./components/App"

import store from "./Store"


//const Layout2 = LoadingComponent(Layout, Loader, ["MAIN_LOADER", "ALL_LOADER"]);

const app = document.getElementById('app')

ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>, app);


import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom"
import SelectedSong from "./components/SelectedSong"
import SongsList from "./components/SongsList"
import { Provider } from "react-redux"

import { createStore } from "redux"
import reducers from "./reducers"

import "./index.scss"

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Router>
      <SongsList />
      <SelectedSong />
    </Router>
  </Provider>,
  document.getElementById("root")
)

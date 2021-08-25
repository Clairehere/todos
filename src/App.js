import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import React  from 'react'
import * as ROUTES from './constants/routes.js'
import TodoListPage from "./components/home/TodoListPage.jsx"
import withTopMenu from "./HOC/withTopMenu"

function App() {
  return (
    <BrowserRouter>
      <Route exact path={ROUTES.HOME} component={withTopMenu(TodoListPage)}/>
    </BrowserRouter>
  )
}

export default App;

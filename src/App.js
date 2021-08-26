import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import React  from 'react'
import * as ROUTES from './constants/routes.js'
import TodoListPage from "./components/home/TodoListPage.jsx"
import withTopMenu from "./HOC/withTopMenu"
import TaskCard from "./components/tasks/TaskCard"

function App() {
  return (
    <BrowserRouter>
      <Route exact path={ROUTES.HOME} component={withTopMenu(TodoListPage)}/>
      <Route exact path={ROUTES.TASK} component={withTopMenu(TaskCard)}/>
    </BrowserRouter>
  )
}

export default App;

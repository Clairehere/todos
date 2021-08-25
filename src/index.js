import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import {createTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import {CssBaseline} from '@material-ui/core'
import i18next from "i18next"
import {I18nextProvider} from "react-i18next"
import translation_fr from "./translations/fr/translation"


let theme = createTheme({
  //TODO
})

theme = {
  ...theme,
  overrides: {
    //TODO
  },
}

const store = createStore(
  rootReducer,
)

//TODO : Move to file
i18next.init({
  interpolation: { escapeValue: false },
  lng: 'fr',
  resources: {
    fr: {
      common: translation_fr
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
      </I18nextProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

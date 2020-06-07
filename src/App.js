import React, { useState }from 'react'
import './App.css'
import Routes from './config/router'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './config/theme'
import {GlobalStyles} from './config/global'
import {useDispatch, useSelector, Provider} from 'react-redux'
import {store} from './config/store'
import ToggleTheme from './components/ToggleTheme'
import { Notifications } from 'react-push-notification';
import { withNamespaces } from 'react-i18next';
import i18n from './config/i18n'

function App({t}) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  
  return (
  
    <Provider store={store}>
      <Notifications />
      <div>
          <button onClick={() => changeLanguage('en')}>en</button>
          <button onClick={() => changeLanguage('fr')}>fr</button>
          <h1>{t('choose')}</h1>
      </div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
       
        <Routes/>
      </ThemeProvider>
    </Provider>
  )
}

export default withNamespaces()(App)

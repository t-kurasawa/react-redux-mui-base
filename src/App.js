import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './components/Header'

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Header />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </MuiThemeProvider>
)

export default App;
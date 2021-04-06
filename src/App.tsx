import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QuizProvider } from './contexts/QuizContext';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { Main } from './Main';

function App() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Ziddy Quiz
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
          <QuizProvider>
            <Main />
          </QuizProvider>
      </main>
    </React.Fragment>
  );
}

export default App;

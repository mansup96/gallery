import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Section from './components/common/Section/Section';
import { theme } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header title="Галерея" />
      <Section row>
          <div></div>
      </Section>
    </ThemeProvider>
  );
};

export default App;

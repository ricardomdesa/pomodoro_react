import React from 'react';
import MainContainer from './components/MainContainer';
import { MainProvider } from './providers/MainProvider';

function App() {
  return (
    <div className="App">
      <MainProvider>
        <MainContainer />
      </MainProvider>
    </div>
  );
}

export default App;

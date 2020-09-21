import React from 'react';

import { AppProvider } from './context';
import Home from './components/Home';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;

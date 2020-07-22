import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ProviderCategories from './context/ContextCategories';

function App() {
  return (
    <ProviderCategories>
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <Form/>
        </div>
      </div>
    </ProviderCategories>
  );
}

export default App;

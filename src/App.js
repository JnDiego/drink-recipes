import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import RecipeList from './components/RecipeList';
import ProviderCategories from './context/ContextCategories';
import ProviderRecipes from './context/ContextRecipes';
import ProviderModal from './context/ContextModal';

function App() {
  return (
    <ProviderCategories>
      <ProviderRecipes>
        <ProviderModal>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipeList />
          </div>
        </ProviderModal>
      </ProviderRecipes>
    </ProviderCategories>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CatOwnerForm from './CatOwnerForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Мое приложение React с формой для владельцев котов</h1>
      <CatOwnerForm />
    </div>
  );
}

export default App;

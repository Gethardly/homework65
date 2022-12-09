import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Pages from "./containers/Pages/Pages";
import NewPage from "./containers/NewPage/NewPage";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Pages/>}/>
          <Route path="/pages/:pageName" element={<Pages/>}/>
          <Route path="/pages/admin" element={<NewPage/>}/>
          <Route path="*" element={<h3>Not found :(</h3>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;

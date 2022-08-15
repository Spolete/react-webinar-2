import React from 'react';
import Main from "./main";
import Basket from "./basket";
import useSelector from "../utils/use-selector";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Item from './item';

/**
 * Приложение
 * @return {React.ReactElement} Виртуальные элементы React
 */
function App() {

  console.log('App');

  const modal = useSelector(state => state.modals.name);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/:id' element={<Item/>}/>
        </Routes>
      </ BrowserRouter>
      {modal === 'basket' && <Basket/>}
    </>
  );
}

export default React.memo(App);
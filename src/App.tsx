import React from 'react';
import { ButtonIndex } from './atoms/buttonComponents';
import { InputIndex } from './atoms/inputComponents';
import { SearchBox } from './molecules/searchBox';

function App() {
  return (
    <>
      <SearchBox
        titleButton="Molecula 1"
        titleInput="Digite aqui alguma coisa"
        backgroundColorButton="royalblue"

      />
      <SearchBox
        titleButton="Molecula 2"
        titleInput="Digite aqui alguma coisa"
        backgroundColorButton="royalblue"

      />
    </>
  );
}

export default App;

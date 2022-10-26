import React, { useState } from 'react';

import Header from './components/Header';
import Base from './components/Base';
import Resultados from './components/Resultados';

import "./App.css";

function App() {
  const [ib, set_ib] = useState();
  const [ic, set_ic] = useState('');
  const [vce, set_vce] = useState('');
  
  const handleInputAddicion = (ib, ic, vce) => {
    set_ib(ib);
    set_ic(ic);
    set_vce(vce);
  }

  return (
    <div className='container'>
      <Header/>
      <Base handleInputAddicion={handleInputAddicion}/>
      <Resultados
        resib={ib}
        resic={ic}
        resvce={vce}/>
    </div>
  );
}

export default App;

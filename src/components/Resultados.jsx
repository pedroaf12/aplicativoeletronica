import React from 'react';

import "./Resultados.css";

const Resultados = ( {resib, resic, resvce} ) => {
    return ( 
        <div>
            <p className='style-resultados'>Ic ={resib}</p>
            <p className='style-resultados'>Ib ={resic}</p>
            <p className='style-resultados'>Vce ={resvce}</p>
            
            
        </div>
     );
}
 
export default Resultados;
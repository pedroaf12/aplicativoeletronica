import React, { useState } from 'react';

import Button from './Button';

import "./Base.css";


const Base = ( {handleInputAddicion} ) => {
    const [valorVcc, setValorVcc] = useState('')
    const [valorVbb, setValorVbb] = useState('')
    const [valorRb, setValorRb] = useState('')
    const [valorRc, setValorRc] = useState('')
    const [valorBeta, setValorBeta] = useState('')

    const handleInputChangeVbb = (e) => {
        setValorVbb(e.target.value);
    }

    const handleInputChangeVcc = (e) => {
        setValorVcc(e.target.value);
    }

    const handleInputChangeRb = (e) => {
        setValorRb(e.target.value);
    }

    const handleInputChangeRc = (e) => {
        setValorRc(e.target.value);
    }

    const handleInputChangeBeta = (e) => {
        setValorBeta(e.target.value);
    }

    const handleCalcularClick = () =>{
        const ib = (parseFloat(valorVbb)) / parseFloat(valorRb)
        const ic = parseFloat(valorBeta) * ib
        const vce = parseFloat(valorVcc) - (ic * parseFloat(valorRc))
        handleInputAddicion(ib, ic, vce)
        setValorVbb("")
        setValorVcc("")
        setValorRb("")
        setValorRc("")
        setValorBeta("")
    }
    return ( 
        <div 
            className='container-inputs'>
                <input className='number-input'
                    onChange={handleInputChangeVbb}
                    value={valorVbb}
                    placeholder='Vbb'
                    type="text">

                </input>
                <input className='number-input'
                    onChange={handleInputChangeVcc}
                    value={valorVcc}
                    placeholder='Vcc'
                    type="text">

                </input>
                <input className='number-input'
                    onChange={handleInputChangeRb}
                    value={valorRb}
                    placeholder='Rb'
                    type="text">

                </input>
                <input className='number-input'
                    onChange={handleInputChangeRc}
                    value={valorRc}
                    placeholder='Rc'
                    type="text">

                </input>
                <input className='number-input'
                    onChange={handleInputChangeBeta}
                    value={valorBeta}
                    placeholder='Beta'
                    type="text">

                </input>
                <div>
                    <Button onClick={handleCalcularClick}>Calcular</Button>
                </div>
        </div>
     );
}
 
export default Base;
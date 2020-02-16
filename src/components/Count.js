import React, { useState, Fragment } from 'react';

const Count = () => {

    const [count, setCount] = useState(0);

    return (  
        <Fragment>
            <h3>Contador { count }</h3>
            <button onClick={ () => setCount(count + 1) }>Aumentar</button>
            <button onClick={ () => setCount(count - 1) }>Disminuir</button>
        </Fragment>
    );
}
 
export default Count;


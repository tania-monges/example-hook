import React, {useState, Fragment} from 'react';

const List = () => {

    const [arrayNumber, setNumber] = useState([1,2,3,4,5])
    const [increment, setIncrement] = useState(1)

    const addElement = () => {
        setIncrement(increment + 1)
        setNumber([...arrayNumber, increment + 5])
    }
    return ( 
        <Fragment>
            <h3>Lista</h3>
            {
                arrayNumber.map((item, index) => 
                    <p key = {index}> {item} - {index}</p>
                )
            }
            <button onClick={addElement}>Agregar</button>
        </Fragment>
    );
}
 
export default List;
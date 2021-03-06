import React , {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const AddTranscation = () => {
    //[variable, function for change variable] = useState({initial value})
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
        e.preventDefault();

        const newTranscation = {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount : +amount,
            isChosen : true
        }
        addTransaction(newTranscation)

    }
    return (
        <>
            <h3>Add custom book</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
                    placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Price <br />
                    </label                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                     placeholder="Enter amount..." />
                </div>
                <button className="btn">Add book</button>
            </form>
        </>
    )
}

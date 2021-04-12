import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './reset.css';
import './App.scss';

const App = () => {
    const [breeds, setBreeds] = useState(null);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://dog.ceo/api/breeds/list/all'
        }).then(response => {
            if (response.status === 200) {
                setBreeds(Object.keys(response.data.message));
            }
        }).catch(e => {
            console.log(e);
        })
    }, []);
    return (
        <div className="main__container">
            <h1 className="main__title">DOG BREEDS</h1>
            {!breeds && <p>loading...</p>}
            {breeds &&
            <ol className="main__list">
                {breeds.map(breed => {
                    return <li className="main__breed" key={breed}>{breed}</li>
                })}
            </ol>}
        </div>
    );
};

export default App;

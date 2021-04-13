import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './reset.css';
import './App.scss';
import Modal from './components/Modal';

const App = () => {
    const [breeds, setBreeds] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedBreed, setSelectedBreed] = useState(null);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://dog.ceo/api/breeds/list/all'
        }).then(response => {
            if (response.status === 200) {
                setBreeds(response.data.message);
                console.log(response.data.message);
            }
        }).catch(e => {
            console.log(e);
        })
    }, []);

    const setModal = async (selectedBreedName) => {
        const breedImg = await getRandomImage(false, selectedBreedName);
        const subBreedImgList = [];

        if (breeds[selectedBreedName]) {
            for (let i = 0; i < breeds[selectedBreedName].length; i++) {
                const img = await getRandomImage(true, selectedBreedName, breeds[selectedBreedName][i]);
                subBreedImgList.push(img);
            }
        }

        console.log('subBreedImgList', subBreedImgList)
        setSelectedBreed({
            'name': selectedBreedName,
            'sub': breeds[selectedBreedName],
            'img': breedImg,
            'subImg': subBreedImgList
        });
        setShowModal(true);
    }


    const getRandomImage = async (isSub, breed, subBreed) => {
        return axios({
            method: 'get',
            url: isSub ? `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random` : `https://dog.ceo/api/breed/${breed}/images/random`
        }).then(response => {
            console.log('response', response);
            if (response.status === 200) {
                return response.data.message;
            }
        }).catch(e => {
            console.log(e);
        })
    }


    return (
        <>
            <div className="main__container">
                <h1 className="main__title">DOG BREEDS</h1>
                {!breeds && <p>loading...</p>}
                {breeds &&
                <ol className="main__list">
                    {Object.keys(breeds).map(breed => {
                        return <li className="main__breed"
                                   key={breed}
                                   onClick={() => {
                                       setModal(breed)
                                   }}>
                            {breed}
                        </li>
                    })}
                </ol>}
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} selectedBreed={selectedBreed}/>
        </>
    );
};

export default App;

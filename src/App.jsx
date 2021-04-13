import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './reset.css';
import './App.scss';
import Modal from './components/Modal';
import Loader from "./components/Loader";

const App = () => {
    const [breeds, setBreeds] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [selectedBreed, setSelectedBreed] = useState(null);
    const [favoriteList, setFavoriteList] = useState([]);
    const [filterByFavorite, setFilterByFavorite] = useState(false);

    useEffect(() => {
        setShowLoader(true);
        axios({
            method: 'get',
            url: 'https://dog.ceo/api/breeds/list/all'
        }).then(response => {
            setShowLoader(false);
            if (response.status === 200) {
                setBreeds(response.data.message);
                console.log(response.data.message);
            }
        }).catch(e => {
            setShowLoader(false);
            console.log(e);
        })
    }, []);

    const setModal = async (selectedBreedName) => {
        setShowLoader(true);
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

    const addToFavorite = () => {
        const listCopy = [...favoriteList];
        const selectedBreedIndex = listCopy.indexOf(selectedBreed.name);
        if (selectedBreedIndex > -1) listCopy.splice(selectedBreedIndex, 1);
        else listCopy.push(selectedBreed.name);

        setFavoriteList(listCopy);
    };

    useEffect(() => {
        console.log('favoriteList', favoriteList)
    }, [favoriteList])


    return (
        <>
            <div className="main__container">
                <Loader showLoader={showLoader}/>
                <h1 className="main__title">DOG BREEDS</h1>
                {!breeds && <p>loading...</p>}
                {breeds &&
                <div>
                    <input type="checkbox" name="filter" onClick={() => {
                        setFilterByFavorite(!filterByFavorite)
                    }}/>
                    <label htmlFor="filter">filter by favorite</label>
                    <ol className="main__list">
                        {!filterByFavorite && Object.keys(breeds).map(breed => {
                            return <li className="main__breed"
                                       key={breed}
                                       onClick={() => {
                                           setModal(breed)
                                       }}>
                                {breed}
                            </li>
                        })}

                        {filterByFavorite && Object.keys(breeds).map(breed => {
                            if (favoriteList.includes(breed)) {
                                return <li className="main__breed"
                                           key={breed}
                                           onClick={() => {
                                               setModal(breed)
                                           }}>
                                    {breed}
                                </li>
                            }
                        })}

                    </ol>
                </div>
                }
            </div>
            <Modal showModal={showModal} setShowLoader={setShowLoader} setShowModal={setShowModal}
                   selectedBreed={selectedBreed}
                   favorteList={favoriteList}
                   addToFavorite={addToFavorite}
            />
        </>
    );
};

export default App;

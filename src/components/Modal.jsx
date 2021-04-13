import React, {useRef, useState, useEffect} from 'react';
import './modal.scss'

const Modal = (prop) => {
    const [clickedOutside, setClickedOutside] = useState(false);
    const [isAllImageLoaded, setIsAllImageLoaded] = useState([false]);
    const [loading, setLoading] = useState(true);
    const myRef = useRef();

    // const handleClickOutside = e => {
    //     if (prop.showModal && !myRef.current.contains(e.target)) setClickedOutside(true);
    // };
    // const handleClickInside = () => setClickedOutside(false);
    //
    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => document.removeEventListener('mousedown', handleClickOutside);
    // });

    // useEffect(() => {
    //     console.log('clickedOutside', clickedOutside)
    //     if (clickedOutside) prop.setShowModal(false);
    // }, [clickedOutside])

    useEffect(() => {
        if (prop.selectedBreed && prop.selectedBreed.sub.length > 0) {
            const newArr = Array(prop.selectedBreed.sub.length + 1).fill(false);
            setIsAllImageLoaded(newArr)
        }
    }, [prop.selectedBreed]);

    useEffect(() => {
        let r = true;
        isAllImageLoaded.map(v => {
            if (!v) r = false
        })
        if (r) {
            setLoading(false);
            prop.setShowLoader(false);
        }
    }, [isAllImageLoaded]);

    const updateImage = (idx) => {
        const imageListCopy = [...isAllImageLoaded];
        imageListCopy[idx] = true;
        setIsAllImageLoaded(imageListCopy);
    }

    if (prop.showModal) return (
        <div className="modal__container">
            {/*<div className="modal__contents" ref={myRef} onClick={handleClickInside}>*/}
            <div className={loading? "modal__contents hidden" : "modal__contents"}>
                <h1>{prop.selectedBreed.name}</h1>
                <div><img src={prop.selectedBreed.img} alt={prop.selectedBreed}
                          onLoad={() => updateImage(0)}/>
                </div>

                {prop.selectedBreed.sub && prop.selectedBreed.sub.map((sub, idx) => {
                    return (
                        <div key={sub}>
                            <h1>{sub}</h1>
                            <div><img src={prop.selectedBreed.subImg[idx]} alt={sub}
                                      onLoad={() => updateImage(idx + 1)}/>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );

    else return <span>{}</span>
};

export default Modal;

import React from 'react';

const Loader = (prop) => {
    if (prop.showLoader) return (
        <div className="loader__container">
            <div className="loader__contents">
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
            </div>
        </div>
    )
    return <span>{}</span>
};

export default Loader;

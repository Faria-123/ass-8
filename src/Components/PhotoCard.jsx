import React from 'react';

const PhotoCard = ({ photo }) => {
    return (
        <div className='border-2 border-gray-500'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={photo.image}
                        alt={photo.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{photo.name}</h2>
                    <p>{photo.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoCard;
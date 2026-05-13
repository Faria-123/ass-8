import React from 'react';
import PhotoCard from './PhotoCard';

const Terget = async () => {
    const res = await fetch('https://ass-8-woad.vercel.app/data.json');
    const data = await res.json();
    const photos = data.slice(0, 3);
    // console.log(datas);
    return (
        <div>
            {
                photos.map(photo => <PhotoCard photo={photo} key={photo.id} ></PhotoCard>)
            }
        </div>
    );
};

export default Terget;
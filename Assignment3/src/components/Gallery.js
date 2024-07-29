import React, { useState } from 'react';
import Header from './Header';
import './Gallery.css';

const initialImages = [
    {
        url: 'https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0',
        description: 'Forest'
    },
    {
        url: 'https://th.bing.com/th/id/OIP.hgXMcRAKBKINq_x6x1THyQHaED?w=615&h=337&rs=1&pid=ImgDetMain',
        description: 'Glacier'
    },
    {
        url: 'https://th.bing.com/th/id/OIP.xung4mlBfvUR3RKzjnRY2AHaEK?rs=1&pid=ImgDetMain',
        description: 'Colourful Forest And Mountains'
    },
    {
        url: 'https://th.bing.com/th/id/OIP.r6T15uZAtJojeA8gFi8AEgHaEH?rs=1&pid=ImgDetMain',
        description: 'Lighthouse'
    },
    {
        url: 'https://th.bing.com/th/id/OIP.qEPQskomTKlrF-3S_WSHjgHaEQ?rs=1&pid=ImgDetMain',
        description: 'Trees'
    },
    {
        url: 'https://th.bing.com/th/id/OIP._FJFJqCgfY1GSl100ui2SQHaE5?rs=1&pid=ImgDetMain',
        description: 'Mountains'
    },
    {
        url: 'https://th.bing.com/th/id/OIP.t437y1ZKV_7lm2ZMe1dF5wAAAA?w=350&h=284&rs=1&pid=ImgDetMain',
        description: 'Mountain Range'
    },
    {
        url: 'https://th.bing.com/th/id/OIP.U2udkDvfTOLYOoV2M6pNHAHaE7?pid=ImgDet&w=474&h=315&rs=1',
        description: 'Autumn'
    },
    {
        url: 'https://th.bing.com/th/id/R.c20e11d26003d7f0d000823d84233ef0?rik=kGGNMR%2fWnIXq7Q&riu=http%3a%2f%2fwww.gettyimages.com.au%2fgi-resources%2fimages%2fHomepage%2f171795015.jpg&ehk=%2fr%2fGCoX5G%2fy5td0O6cn5NfNg1dYivxjlel%2bRBi%2bfh3g%3d&risl=&pid=ImgRaw&r=0',
        description: 'Glacier Lake With Cold Water'
    },
];

const Gallery = () => {
    const [images, setImages] = useState(initialImages);

    const handleRemove = (index) => {
        const updatedImages = images.filter((_, idx) => idx !== index);
        setImages(updatedImages);
    };

    const handleEdit = (index) => {
        const newDescription = prompt("Enter new description:", images[index].description);
        if (newDescription) {
            const updatedImages = [...images];
            updatedImages[index].description = newDescription;
            setImages(updatedImages);
        }
    };

    const handleAddPhoto = (url, description) => {
        const newImage = { url, description };
        setImages((prevImages) => [...prevImages, newImage]);
    };

    return (
        <div>
            <Header onAddPhoto={handleAddPhoto} /> {}
            <div className="gallery">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image.url} alt={`Gallery Item ${index + 1}`} />
                        <p className="image-description">{image.description}</p>
                        <div className="button-group">
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

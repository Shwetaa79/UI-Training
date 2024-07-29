import React, { useState } from 'react';
import './Header.css';

const Header = ({ onAddPhoto }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    const handleAddPhoto = () => {
        if (imageUrl && description) {
            onAddPhoto(imageUrl, description);
            setImageUrl('');
            setDescription('');
        } else {
            alert('Please enter both the image URL and description.');
        }
    };

    return (
        <div className="header">
            <h2>Upload Photo</h2>
            <input
                type="text"
                placeholder="Enter Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleAddPhoto}>Add Photo</button>
        </div>
    );
};

export default Header;

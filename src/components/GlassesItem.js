import React from 'react';
import './GlassesItem.css';

const GlassesItem = ({ glass, onSelect }) => {
    return (
        <img
            src={glass.url}
            alt={glass.name}
            className="glasses-item"
            onClick={() => onSelect(glass)}
        />
    );
};

export default GlassesItem;

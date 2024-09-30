import React from 'react';
import './GlassesList.css';

const GlassesList = ({ glasses, onSelectGlasses }) => {
    return (
        <div className="glasses-list">
            {glasses.map((glass) => (
                <img
                    key={glass.id}
                    src={glass.url}
                    alt={glass.name}
                    className="glasses-item"
                    onClick={() => onSelectGlasses(glass)}
                />
            ))}
        </div>
    );
};

export default GlassesList;

import React from 'react';
import './FaceDisplay.css';

const FaceDisplay = ({ selectedGlasses }) => {
    return (
        <div className="face-display">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPza1-TqTqc-iz6Do-42T6gEOXdz0PtWsTwyZjDtFc-ESEP9jj" alt="Model" className="model-image" />
            {selectedGlasses && (
                <>
                    <img src={selectedGlasses.url} alt={selectedGlasses.name} className="glasses-image" />
                    <div className="glasses-info">
                        <h3>{selectedGlasses.name}</h3>
                        <p>{selectedGlasses.desc}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default FaceDisplay;

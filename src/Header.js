import React from 'react';
import earth from './earth.png';

export class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img src={earth} alt="Earth icon" />
                <p>my travel journal.</p>
            </div>
        )
    }
}
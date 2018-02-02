import React from 'react'
import { weaponTypes, sharpness } from '../weaponData'
import './WeaponSelector.css'

const WeaponSelector = (props) => {
    const weaponButtons = weaponTypes.map((type) =>
        <button className="weapon-selector-button">
            <img className="weapon-selector-button-img" src={type.icon} alt=""/>
        </button>
    )

    const sharpnessOptions = sharpness.map((sharp) => 
        <option>{sharp.name}</option>
    )
    return (
        <div className="weapon-selector">
            <div className="weapon-selector-class-buttons">
                {weaponButtons}
            </div>
            <div className="weapon-selector-weapon-select">
                <input/>
                <input/>
                <select>
                    {sharpnessOptions}
                </select>
            </div>
        </div>
    )
}

export default WeaponSelector
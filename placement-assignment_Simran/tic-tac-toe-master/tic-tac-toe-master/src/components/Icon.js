import React from "react";
import {FaCircleNotch, FaTimes, FaPen} from 'react-icons/fa';


const Icon = ({name}) => {
    switch (name) {
        case 'circle':
            return <FaCircleNotch className="icon"/>
        case 'cross':
            return <FaTimes className="icon" />
        default:
            return <FaPen className="icon"/>
    }
}

export default Icon;
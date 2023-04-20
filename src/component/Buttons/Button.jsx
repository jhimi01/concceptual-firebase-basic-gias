import React from 'react';
import { FaGithub,FaGoogle } from "react-icons/fa";

const Button = () => {
    return (
        <div>
            <button>signin with github <FaGithub/></button>
            <button>signin with google <FaGoogle/></button>
        </div>
    );
};

export default Button;
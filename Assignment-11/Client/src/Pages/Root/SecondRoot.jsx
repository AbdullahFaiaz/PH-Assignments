import React from 'react';
import { Outlet } from 'react-router-dom';

const SecondRoot = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default SecondRoot;
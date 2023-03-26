import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {

    const apiInfo = { }
    return (
        <div>
            <ApiContext.Provider value={apiInfo}>
                {children}
            </ApiContext.Provider>
        </div>
    );
};

export default ApiProvider;
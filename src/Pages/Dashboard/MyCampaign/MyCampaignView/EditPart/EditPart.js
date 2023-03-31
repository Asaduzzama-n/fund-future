import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../../Context/AuthProvider';

const EditPart = ({setView}) => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleCampaignEditFormSubmit =(data)=>{

    }

    return (
        <div>
            <h1>Edit part</h1>

            <div>
                <button onClick={()=>setView(true)}>View</button>
            </div>
        </div>
    );
};

export default EditPart;
import React from 'react';
import './Post/MakePost.scss'

function Input(props) {
    const { label, inputType = '', className, setdata, data } = props;
    return (
        <>
            <label>{label}</label>
            {inputType === 'area' ? (
                <textarea type="text" className={className} placeholder={data} onChange={(e) => setdata(e.target.value)} />
            ) : (
                <input type="text" placeholder={data} onChange={(e) => setdata(e.target.value)} />
            )}
        </>
    );
}

export default Input;

import React, { useState } from 'react';
import './Edit.css';

import { useDispatch, useSelector } from 'react-redux';
import Input from '../../Input';
import { updateUser } from '../../../redux/apiRequest';

function Edit(props) {
    const { setIsEdit } = props;
    
    const dataUser = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState(dataUser.name);
    const [age, setAge] = useState(dataUser.age);
    const [image, setImage] = useState(dataUser.image);
    const [description, setDescripion] = useState(dataUser.description);
    const [theme, setTheme] = useState(dataUser.themeColor);

    const useDataUpdate = {
        name: name,
        age: age,
        image: image,
        description: description,
        themeColor: theme,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        updateUser(useDataUpdate,dispatch);
    };
    const handleClose = ()=> {
        setIsEdit(false);
    };

    const avatarUrl = [
        'https://i.redd.it/ib7scrg5t7w61.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlm7HqPBctTf3tVNPF4mpsYh6So6nwV4XcG6qf1t-BCRsaDlcGpIkmYl9bQnQrxHyE7tI&usqp=CAU',
        'https://preview.redd.it/k731m3r5ypv51.png?auto=webp&s=5fea1a552ba8352fc1038d489f8274e5c2672076',
        'https://i.redd.it/pec3zeyqdhy51.jpg',
        'https://preview.redd.it/yt4hzlwurmv51.png?auto=webp&s=e664082ccb4733e96d597c29d37c30b5363890a6',
        'https://i.redd.it/n2uwb25efjv51.jpg',
    ];

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <div className='header-edit'>
                    <label className="close-edit" onClick={handleClose}>Close</label>
                    <button className="close">SAVE</button>
                    </div>
                    <div className="edit-profile">Edit Profile</div>
                    <div className="input-container">
                        <Input label="Display name" type="text" placeholder={dataUser.name} setdata={setName} />
                        <Input label="Age:" type="text" placeholder={dataUser.age} setdata={setAge} />
                        <Input
                            inputType="area"
                            label="Description:"
                            placeholder={dataUser.description}
                            type="text"
                            setdata={setDescripion}
                        />

                        <label>Profile picture:</label>
                        <div className="input-image-container">
                            {avatarUrl.map((url, i) => (
                                <div key={i}>
                                    <img
                                        onClick={(e) => {
                                            setImage(e.target.src);
                                        }}
                                        className="input-image"
                                        src={url}
                                        alt="#"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="theme-container">
                            <label> Theme color</label>
                            <input
                                onChange={(e) => setTheme(e.target.value)}
                                type="color"
                                className="theme-color"
                                value={theme}
                            />
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
}

export default Edit;

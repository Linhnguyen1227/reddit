import { useState } from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Edit from './component/Header/Edit/Edit';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import MakePost from './component/Post/MakePost';
import Post from './component/Post/Post';


function App() {
    const pending = useSelector(state=>state.user.pending)
    const error = useSelector(state=>state.user.error)
    const [isOpenPost,setIsOpenPost] = useState(false)
    const [isEdit, setIsEdit] = useState(false);

    return <div className="App">
        {isEdit 
            ? <Edit setIsEdit={setIsEdit} /> 
            : !isEdit && !isOpenPost  ? (
                <>
                <Header setIsEdit={setIsEdit} /> 
                <Post/>
                <Footer isOpenPost = {isOpenPost} setIsOpenPost={setIsOpenPost}/>
                </>
            ) : (
                <>
                    <Header setIsEdit={setIsEdit} />  
                    <MakePost setIsOpenPost={setIsOpenPost}/> 
                    <Footer isOpenPost = {isOpenPost} setIsOpenPost={setIsOpenPost}/>
                </>
            )
        }
        { pending && (
            <p className='loading'>Loading...</p>
        )}
        {!isEdit && error && (alert`Data fetch server error`)}
        </div>;
}

export default App;

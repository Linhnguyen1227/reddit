import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './MakePost.scss'

import Input from '../Input';
import { createPost } from '../../redux/postSlide';



function MakePost(props) {
    const {setIsOpenPost} = props;
    const dispatch = useDispatch();
    const tags = ['None','NSFW','Quotes','Mood','Shitpost']
    const [title,setTitle] = useState('Add title');
    const [desc,setDesc] = useState('Add title Description');
    const [isSelectIndex,setIsSelectIndex] = useState(0);

    const handlePost = ()=> {
        setIsOpenPost(false);
        const newPost = {
            title: title,
            description:desc,
            tags:isSelectIndex
        }
        dispatch(createPost(newPost))
    }
    return (
        <section className='makepost-container'>
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>Post</p>
            </div>
            <Input type='text' 
                data={title} 
                label='Title' 
                setdata={setTitle} 
                inputType = 'area' 
                placeholder={title} 
                className='makepost-title'
            />
            <Input 
                type='text' 
                data={desc} 
                label='Description' 
                setdata={setDesc} 
                inputType = 'area' 
                placeholder={title} 
                className='makepost-desc'
            />
            <label>Tag</label>
            <div className="makepost-tags">
                {tags.map((tag,index)=> 
                (<button key={index} 
                    className={isSelectIndex === index 
                    ? `makepost-tags-selected` 
                    : `makepost-tags-${tag}`} 
                    onClick={()=>setIsSelectIndex(index)}>
                        {tag}
                </button>)
                )}
            </div>
        </section>
    );
}

export default MakePost;
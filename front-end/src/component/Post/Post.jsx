import React from 'react';
import './MakePost.scss';
import { useSelector } from 'react-redux';

function Post(props) {
    const posts = useSelector((state)=>state.post.posts)
    const tags = ['None','NSFW','Quotes','Mood','Shitpost']

    return (
        <section className='post-container'>
                {posts.slice(1).map((post,index)=> 
            <div className="posts" key={index}>
                <div className="posts-title">{post.title}</div>
                <div className={`posts-tags-${tags[post.tags]} posts-tags `}>{tags[post.tags]}</div>
                <div className="post-desc">{post.description}</div>
            </div>
                )}
        </section>
    );
}

export default Post;
import React from 'react';
import './Footer.scss'
function Footer(props) {
    const{setIsOpenPost,isOpenPost} = props;

    return (
        <footer> 
            <div className="footer-title" onClick={()=>{
                setIsOpenPost(!isOpenPost)
            }
            }>
                {!isOpenPost ? '+' : 'x'}
                </div>
        </footer>
    );
}

export default Footer;
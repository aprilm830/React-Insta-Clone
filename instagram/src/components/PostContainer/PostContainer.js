import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = ( { postData } ) => (
    <div className="post-container">
              <div className="image">
            <img src={postData.imageUrl} Alt="pic" />
        </div>
        <CommentSection comments={postData.comments} />
    </div>
);

export default PostContainer;

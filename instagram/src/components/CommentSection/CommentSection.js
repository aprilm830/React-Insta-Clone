import React, { Component } from 'react';


//this is one life cycle
class CommentSection extends Component
{
    
    constructor( props )
    {
        super();

        this.state = {
            username: "ivan",
            comments: [],
            newCommentText:''
        }
    }
//This is another of the life cycles. this fire before the code
    componentDidMount()
    {
        this.setState( {
            comments: this.props.comments
           
        } );
        
    }
    addComment = ( e ) =>
    {
        e.preventDefault();
        const commentObj = {
            username: 'Sean',
            text: this.state.newComment
        };

        this.setState( {
            comments: [ ...this.state.comments, commentObj ],
            newComment: ''
        })
}  

    handleCommentInput = ( e ) =>
    {
        this.setState( { newComment: e.target.value } );
}
    render()
    {
        return (
            <div className="Comment-Section">
                {this.state.comments ? this.state.comments.map( ( comment, i ) => (
                    <div className="comment" key={i}>
                        <div className="comment-user"><b>{comment.username}</b></div>
                        <div className="comment-text">{comment.text}</div>
                    </div> )
                ) : null}
                <div className="comment-input">
                    <input type="text" placeholder="..." value={this.state.newComment} onChange={this.handleCommentInput} />
                    <button type="submit" onClick={this.addComment}>Submit</button>
                </div>
            </div>
        );
    }
}

export default CommentSection;

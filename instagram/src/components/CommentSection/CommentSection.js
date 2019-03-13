import React, { Component } from 'react';



class CommentSection extends Component
{
    
    constructor( props )
    {
        super();

        this.state = {
            username: "ivan",
            comments: [],
            newCommentText:""
        }
    }
//This is one of the life cycles. this fire before the code
    componentDidMount()
    {
        this.setState( {
            comments: this.props.comments
           
        } );
        
    }
    submitNewComment = ( event ) =>
    {
        if ( event.keyCode === 13 )
        {
            const newComment = {
                username: this.state.username,
                text: this.state.newCommentText
            }
            this.setState( {
                //we use spread operator to go thru  
                comments: [ ...this.state.comments, newComment ],
                newCommentText:""
            })
        }
    }
    updateNewComment = ( event ) =>
    {
        this.setState( {
            newCommentText: event.target.value
        } );
    }
    render()
    {
        return (
            <div className="CommentSection">
                
            </div>
        )
    }
}

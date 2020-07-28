import React, { Component } from 'react'
//import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {
    // state = {
    //     post: null
    // }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res => {
    //         this.setState({
    //             post: res.data         //'data' property is the data from the response. check console for more info.
    //         })
    //     })
    // }

    handleClick = () => {
        this.props.deletePost(this.props.posts.id)  //calling deltePost() function with id to send a action dispatch to rootReducer.js
        this.props.history.push('/');  //redirects user back to home page using react route props.
    }
    render() {
        console.log(this.props)

        const post = this.props.posts ? (
            <div className="post">
                <h4 className="center">{ this.props.posts.title }</h4>
                <p>{ this.props.posts.body }</p>
                <div className="center">
                    <button className="btn grey" onClick={ this.handleClick }>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading Post..</div>
        )
        
        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => { //ownProps is the props of this component before the additional props are added using this function.
  let id = ownProps.match.params.post_id;
  return {
      posts: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
        //deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) } // WITHOUT ACTION CREATORS
    }
}

//store.dispatch({type: 'ADD_TODO', todo: 'buy milk'});
// instead of using store.dispatch, we add "dispatch" as a parameter to the function from the store.
//call the dispatch() function inside the deletepost object.



export default connect(mapStateToProps, mapDispatchToProps)(Post)
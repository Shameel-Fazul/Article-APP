import React, { Component } from 'react'
//import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'; //connects component to redux store.

class Home extends Component {
  // state = {
  //   posts: [ ]
  // }

// componentDidMount() {
//   axios.get('https://jsonplaceholder.typicode.com/posts') //gets data off json placeholder and returns promise - meaning its asyncronous and it promises that it will give data somepoint in time. it takes time to fetch..
//     .then(res => {                                        // 'then' method fires once the data is completely fetched.
//       console.log(res)
//       this.setState({
//         posts: res.data.slice(0,10)
//       })
//     })   
// }
render() {
  const { posts } = this.props; //changed this.state to props, because we're grabbing data using redux now.
  const postList = posts.length ? (
    posts.map(post => {
      return(
        <div className="post card" key={ post.id }>
        <img src={ Pokeball } alt="A pokeball"/> 
          <div className="card-content">
          <Link to={'/' + post.id}>
            <span className="card-title red-text">{ post.title }</span>
          </Link>
            <p>{ post.body }</p>
          </div>
        </div>
      )
    })
  ) : (
    <div className="center">No posts yet</div>
  )
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      { postList }
    </div>
   )
  }
 }

 const mapStateToProps = (state) => { //once connected to redux using connect(), access the store's state and map it to the props of this component.
 return {               //return object represents the different properties we want to add to the props.
   posts: state.posts 
 }
}
  
export default connect(mapStateToProps)(Home)  //connect to redux using high order components. 
                                //connect() is a function that returns the high-order component when invoked.
                                //when returned, it then wraps (Home).
                                //added 'mapStateToProps' as an argument to connect('') so redux knows what data to grab and then apply that data to the component's props object.
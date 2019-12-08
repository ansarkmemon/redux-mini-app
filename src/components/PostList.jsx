import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  render() {
    const { posts } = this.props;
    return (
      <div className="ui relaxed divided list">
        {posts.map(post => (
          <div className="item" key={post.id}>
            <i className="large aligned center icon user"/>
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId}/>
            </div>
          </div>
        ))}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { posts: state.posts };
}

export default connect(mapStateToProps , { fetchPostsAndUsers })(PostList);
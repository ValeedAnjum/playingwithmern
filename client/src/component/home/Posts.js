import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPosts , deletePost} from '../../store/actions/PostActions';
import PostBar from './PostBar';
import Loader from './Loader';
class Posts extends Component {
    componentDidMount(){
        this.props.getPosts();
    }
    render(){
        const { getPosts , posts , deletePost } = this.props;
        return (
            <div >
                {
                    !posts ? <Loader />:null
                }
                {
                    posts && posts.map((Post,index) => {
                        return <PostBar key={index} Post={Post} deletePost={deletePost}/>
                    })
                }
            </div>
        )
    }
}

const mapState = state => {
    return {
        posts:state.Post.post
    }
}
const mapDispatch = dispatch => {
    return {
        getPosts:() => dispatch(getPosts()),
        deletePost:id => dispatch(deletePost(id))
    }
}
export default connect(mapState, mapDispatch)(Posts);

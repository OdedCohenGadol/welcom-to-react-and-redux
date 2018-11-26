import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, removePost } from '../actions/postActions';
import {NEW_POST,REMOVE_POST} from '../actions/types';

import _ from 'lodash';

class Posts extends Component {

    constructor(props){
        super(props);
        this.state={
            filterField: 'name'
        }
        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(state){
        if (state.update.type === NEW_POST){
            this.props.posts.unshift(state.update.payload);
        }else if(state.update.type === REMOVE_POST){
            _.remove(this.props.posts, post=> post.id == state.update.payload);
        }
    }
    onChange(e) {
        this.setState({[e.target.name] : e.target.value} );
    }
    onDelete(e){
        this.props.removePost(e.target.dataset.id);
    }

    render() {
        const postItems = _.sortBy(this.props.posts, [this.state.filterField]).map(post=> (
            <div key={post.id}>
                <h3>{post.name} <button type="button" onClick={this.onDelete} 
                data-id={post.id}>delete</button></h3>
                <p>{post.description}</p>
            </div>
        ));
        return (
            <div>   
               <h1>Posts</h1> 
               <label>sort by</label>
               <select name="filterField" onChange={this.onChange} value={this.props.filterField}>
                   <option value="name">name</option>
                   <option value="description">description</option>
                   <option value="price">price</option>
                   <option value="id">id</option>
               </select>
               {postItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    update: PropTypes.object
}

const mapStateToProps = state=>  ({
    posts: state.posts.items,
    update: state.posts.item
})
export default connect(mapStateToProps, {fetchPosts, removePost})(Posts);
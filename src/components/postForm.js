import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions'

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            id:'',
            price:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value} );
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.name && this.state.price && this.state.id){
            const post ={
                name: this.state.name,
                price: this.state.price,
                id: this.state.id,
                description : this.state.description
            }

            this.props.createPost(post);

        }
    }



    render() {
        return (
            <div>
                <h1>add post</h1>
                <form onSubmit={this.onSubmit}> 
                    <div>
                        <label>id:</label><br/>
                        <input type="number" required name="id" onChange={this.onChange} value={this.state.id}/>
                    </div>
                    <div>
                        <label>name:</label><br/>
                        <input type="text" required name="name" onChange={this.onChange} value={this.state.name}/>
                    </div>
                    <br/>
                    <div>
                        <label>description:</label><br/>
                        <textarea name="description" onChange={this.onChange} value={this.state.description}/>
                    </div>
                    <div>
                        <label>price:</label><br/>
                        <input type="number" required name="price" onChange={this.onChange} value={this.state.price}/>
                    </div>
                    <br/>
<button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes={
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);
import {FETCH_POSTS, NEW_POST,REMOVE_POST} from './types';

export const fetchPosts = () => dispatch => {
    
    fetch('https://msbit-exam-products-store.firebaseio.com/products.json')
    .then(res=> res.json())
    .then(json=> 
        dispatch( {
            type: FETCH_POSTS,
            payload: json
        }) 
    )
}
export const createPost = (postData) => dispatch => {
    console.log('create called');
    fetch('https://msbit-exam-products-store.firebaseio.com/products.json')
    .then(res=> res.json())
    .then(json=> 
        dispatch({
            type: NEW_POST,
             payload: postData
        })
    )
  
}
export const removePost = (postId) => dispatch => {
    console.log('delete called');
    fetch('https://msbit-exam-products-store.firebaseio.com/products.json')
    .then(res=> res.json())
    .then(json=> 
        dispatch({
            type: REMOVE_POST,
            payload: postId
        })
    )
}

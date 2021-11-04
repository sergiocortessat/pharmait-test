const ALL_CONDITION_CONFIGURATION = 'ALL_CONDITION_CONFIGURATION';
const ALL_USER_DATA = 'ALL_USER_DATA';

export const conditionConfiguration = (conditions : {}) => ({
  type: ALL_CONDITION_CONFIGURATION,
  payload: conditions,
});

export const userData = (userData: {}) => ({
  type: ALL_USER_DATA,
  payload: userData,
});

// export const fetchPosts =  () => {
//   return async dispatch => {
//       try {
//           let posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
//           dispatch(fetchPostsSuccess(posts.data.splice(0, 5))) //store first five posts
//       }
//       catch(e){
//           console.log(e)
//       }
//   }
// }
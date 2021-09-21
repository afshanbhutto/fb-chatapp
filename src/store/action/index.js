import firebase from '../../config/firebase'
import {useHistory} from 'react-router-dom';
const facebook_login = (history) => {
    return (dispatch) =>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid
            }
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({type:"SETUSER" , payload:create_user})
                alert("user login successful")
                history.push('/chat')
            })
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

}
//to get data from firebase
const get_users = () => {
    let users = [];
    return (dispatch) =>{
        firebase.database().ref('/').child('users').on('child_added',(data)=>{
            users.push(data.val())
        })
        dispatch({ type:"SETFIREBASEUSERS", payload:users})
    }
}


export{
    facebook_login, 
    get_users
}
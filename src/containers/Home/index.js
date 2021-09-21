import React from 'react';
import { connect } from 'react-redux';
import { facebook_login } from '../../store/action'
import './style.css';

class Home extends React.Component {

    render(){
        return (
            <div className="home">
                <img src="../../assets/chatImg.png" alt="" />
                <h1>Chat-App</h1>

                <button onClick={() => this.props.facebook_login(this.props.history)}>Facebook LogIn</button>
            </div>
          );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProp = (dispatch) => ({
    facebook_login: (history) => dispatch(facebook_login(history))
})

export default connect(mapStateToProps, mapDispatchToProp) (Home);

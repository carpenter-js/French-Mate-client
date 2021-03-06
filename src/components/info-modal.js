import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {toggleModal} from '../actions/game';

import '../stylesheets/info-modal.css'

export class InfoModal extends React.Component {
  // onClick() {
  //   return <Redirect to="/dashboard" />;
  // }

  onClick() {
    this.props.dispatch(toggleModal())
  }

  render() {
    return (
      <div className='modal-wrapper'>
        <section className='modal-content'>
        <article className='top-modal'>
          <h2>Welcome to FrenchMate!</h2>
          <button id='modal-hide-btn' onClick={() => this.onClick()}>Hide</button>
        </article>
          <article className='modal-descriptions'>
            <p>Memorizing new words can be hard, but by using our tested techniques and most
              advanced algorithms, you'll find yourself remembering French words faster than ever before
            </p>
            <p>The game is simple. When you see a word in French, enter the corresponding word in English. We
              keep track of what you get right, and what you get wrong, guaranteeing you spend just the right amount of time
              on the easy words and the difficult words.
            </p>
            <p>Get started now by making an account and learning French!</p>
            <p>Or try it out with a demo user</p>
            <p>username: demo</p>
            <p>password: password12</p>
              
            
          </article>
          <div className='sign-up'>
            <Link to="/register">Sign me up now!</Link>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.game.showModal
  }
}

export default connect(mapStateToProps)(InfoModal);
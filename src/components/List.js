import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemAction } from '../actions';

class List extends Component {
  removeItem = item => {
    this.props.removeItemAction(item);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item, index) => (
            <li key={index}>
              {item}{' '}
              <button onClick={() => this.removeItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = dispatch => ({
  removeItemAction: item => dispatch(removeItemAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

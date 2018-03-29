import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemAction, updateNewItemAction } from '../actions';

class AddItem extends Component {
  updateInputValue = evt => {
    this.props.updateNewItemAction(evt.target.value);
  };

  addItem = () => {
    const newItem = this.props.newItem;
    if (newItem) {
      this.props.addItemAction(newItem);
      this.props.updateNewItemAction('');
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.newItem}
          onChange={this.updateInputValue}
        />
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list,
    newItem: state.newItem,
  };
};

const mapDispatchToProps = dispatch => ({
  addItemAction: item => dispatch(addItemAction(item)),
  updateNewItemAction: newItem => dispatch(updateNewItemAction(newItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);

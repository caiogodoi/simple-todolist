import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemAction } from '../actions';

class AddItem extends Component {
  constructor() {
    super();

    this.state = {
      newItem: '',
    };
  }

  updateInputValue = evt => {
    this.setState({
      newItem: evt.target.value,
    });
  };

  addItem = () => {
    const newItem = this.state.newItem;
    if (newItem) {
      this.props.addItemAction(newItem);
      this.setState({ newItem: '' });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newItem}
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
  };
};

const mapDispatchToProps = dispatch => ({
  addItemAction: item => dispatch(addItemAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);

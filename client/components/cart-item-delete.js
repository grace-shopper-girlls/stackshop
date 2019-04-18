import React from 'react';
import { connect } from 'react-redux';
import { deleteCartItemThunk } from '../store/cart';
// ^^^ create that in the cart redux

const DeleteCartItem = props => {
  const { id, deleteCartItem } = props;
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          deleteCartItem(id);
        }}
      >
        remove from cart
      </button>
    </div>
  );
};

const mapDispatch = dispatch => ({
  deleteCartItem: id => dispatch(deleteCartItemThunk(id)),
});

export default connect(
  null,
  mapDispatch
)(DeleteCartItem);

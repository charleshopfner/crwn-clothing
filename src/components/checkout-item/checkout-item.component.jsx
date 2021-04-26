import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItemToCart, removeItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItemToCart(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

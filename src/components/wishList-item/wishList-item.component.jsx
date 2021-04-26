import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import { clearItemFromWishList } from "../../redux/wishList/wishList.actions";

import {
  WishListItemContainer,
  ImageContainer,
  TextContainer,
  RemoveButtonContainer,
  ShoppingIcon,
  CartContainer,
  ActionsContainer,
} from "./wishList-item.styles";

const WishListItem = ({ wishListItem, clearItemFromWishList, addItemToCart }) => {
  const { imageUrl, name, price } = wishListItem;
  return (
    <WishListItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <TextContainer>{price}</TextContainer>
      <ActionsContainer>
        <RemoveButtonContainer
          onClick={() => clearItemFromWishList(wishListItem)}
        >
          &#10005;
        </RemoveButtonContainer>
        <CartContainer>
          <ShoppingIcon
            onClick={() => {
              addItemToCart(wishListItem);
              clearItemFromWishList(wishListItem);
            }}
          />
        </CartContainer>
      </ActionsContainer>
    </WishListItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromWishList: (item) => dispatch(clearItemFromWishList(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(WishListItem);

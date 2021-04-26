import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";
import {
  addItemToWishList,
  clearItemFromWishList,
} from "../../redux/wishList/wishList.actions";

import { ReactComponent as BlackStar } from "../../assets/black-star.svg";
import { ReactComponent as YellowStar } from "../../assets/yellow-star.svg";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  FavouriteIconContainer,
} from "./collection-styles.styles";
import { createStructuredSelector } from "reselect";
import { selectWishListItems } from "../../redux/wishList/wishList.selectors";

const CollectionItem = ({
  item,
  wishListItems,
  addItemToCart,
  addItemToWishList,
  clearItemFromWishList,
}) => {
  const { name, price, imageUrl } = item;
  const isInWishList = wishListItems.filter(
    (wishListItem) => wishListItem.id === item.id
  );

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      {isInWishList.length > 0 ? (
        <FavouriteIconContainer
          title="Remove it from your wish list."
          onClick={() => clearItemFromWishList(item)}
        >
          <YellowStar />
        </FavouriteIconContainer>
      ) : (
        <FavouriteIconContainer
          title="Add it to your wish list !"
          onClick={() => addItemToWishList(item)}
        >
          <BlackStar />
        </FavouriteIconContainer>
      )}
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  wishListItems: selectWishListItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  addItemToWishList: (item) => dispatch(addItemToWishList(item)),
  clearItemFromWishList: (item) => dispatch(clearItemFromWishList(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);

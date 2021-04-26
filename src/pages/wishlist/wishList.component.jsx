import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWishListItems } from "../../redux/wishList/wishList.selectors";
import {
  WishListPageContainer,
  WishListHeaderContainer,
  HeaderBlockContainer,
} from "./wishList.styles";

import WishListItem from '../../components/wishList-item/wishList-item.component';

const WishListPage = ({ wishListItems }) => {
  return (
    <WishListPageContainer>
      <WishListHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Actions</span>
        </HeaderBlockContainer>
      </WishListHeaderContainer>
      {
        wishListItems.map(wishListItem => (
        <WishListItem key={wishListItem.id} wishListItem={wishListItem} />
      ))}
    </WishListPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  wishListItems: selectWishListItems,
});

export default connect(mapStateToProps)(WishListPage);

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWishListItemsCount } from "../../redux/wishList/wishList.selectors";
import {
  WishListContainer,
  WishListLogo,
  ItemCountContainer,
} from "./wishList-icon.styles";

const WishListIcon = ({itemsCount}) => {
  return (
    <WishListContainer>
      <WishListLogo />
      <ItemCountContainer>{itemsCount}</ItemCountContainer>
    </WishListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCount: selectWishListItemsCount,
});
export default connect(mapStateToProps)(WishListIcon);

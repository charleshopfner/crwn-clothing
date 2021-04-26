import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const WishListItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 30%;
  padding-right: 15px;

  img {
    width: 50%;
    height: 50%;
  }
`;

export const TextContainer = styled.span`
  width: 30%;
`;

export const ActionsContainer = styled.div`
display:flex;
justify-content: space-evenly;
align-items:center;
`

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const CartContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
`;


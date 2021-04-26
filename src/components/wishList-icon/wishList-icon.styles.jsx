import styled from 'styled-components';

import { ReactComponent as WishListLogoSVG } from "../../assets/star-icon.svg";

export const WishListContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const WishListLogo = styled(WishListLogoSVG)`
  width: 25px;
  height: 25px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 11px;
  font-weight: bold;
  bottom: 14px;
`;

//Ajoute à la liste de souhaits l'objet en question
export const addItemToWishList = (wishListItems, wishListItemToAdd) => {
  return [...wishListItems, { ...wishListItemToAdd }];
};

// Retire de la liste de souhaits l'objet en question
export const clearItemFromWishList = (wishListItems, wishListItemToRemove) => {
  return wishListItems.filter(
    (wishListItem) => wishListItem.id !== wishListItemToRemove.id
  );
};

const allProductCategories = [
  "Shirt",
  "T-shirt",
  "Sweater",
  "Cardigan",
  "Jeans",
  "Trousers",
  "Skirt",
];

const allProductUnits = ["A piece", "A pair", "A dozen"];

const allStorageLocation = [
  "Shelf A Row 1",
  "Shelf A Row 2",
  "Shelf A Row 3",
  "Shelf A Row 4",
  "Shelf B Row 1",
  "Shelf B Row 2",
  "Shelf B Row 3",
  "Shelf B Row 4",
];

const renderProductCategory = (category: number): string => {
  switch (category) {
    case 0:
      return "Shirt";
    case 1:
      return "T-shirt";
    case 2:
      return "Sweater";
    case 3:
      return "Cardigan";
    case 4:
      return "Jeans";
    case 5:
      return "Trousers";
    case 6:
      return "Skirt";
    default:
      return "Uncategorised";
  }
};

const renderProductForGender = (forGender: number): string => {
  switch (forGender) {
    case 0:
      return "Male";
    case 1:
      return "Female";
    case 2:
      return "Unisex";
    default:
      return "Uncategorised";
  }
};

const renderProductUnit = (unit: number): string => {
  switch (unit) {
    case 0:
      return "A piece";
    case 1:
      return "A pair";
    case 2:
      return "A dozen";
    default:
      return "Uncategorised.";
  }
};

const renderProductStorageLocation = (storageLocation: number): string => {
  switch (storageLocation) {
    case 0:
      return "Unarranged";
    case 1:
      return "Shelf A Row 1";
    case 2:
      return "Shelf A Row 2";
    case 3:
      return "Shelf A Row 3";
    case 4:
      return "Shelf A Row 4";
    case 5:
      return "Shelf B Row 1";
    case 6:
      return "Shelf B Row 2";
    case 7:
      return "Shelf B Row 3";
    case 8:
      return "Shelf B Row 4";
    default:
      return "Unavailable: out of stock";
  }
};

const renderProductDisplayLocation = (displayLocation: number): string => {
  switch (displayLocation) {
    case 0:
      return "Undisplayed";
    case 1:
      return "Area Male Shelf 1";
    case 2:
      return "Area A Shelf 2";
    case 3:
      return "Area A Shelf 3";
    case 4:
      return "Area A Shelf 4";
    case 5:
      return "Area B Shelf 1";
    case 6:
      return "Area B Shelf 2";
    case 7:
      return "Area B Shelf 3";
    case 8:
      return "Area B Shelf 4";
    default:
      return "Unavailable: out of stock";
  }
};

const renderProductActiveStatus = (status: boolean): string => {
  switch (status) {
    case true:
      return "On sale";
    case false:
      return "Not on sale";
    default:
      return "Error";
  }
};

const renderProductArchivedStatus = (status: boolean): string => {
  switch (status) {
    case true:
      return "Archived";
    case false:
      return "Unarchived";
    default:
      return "Error";
  }
};

const renderProductVerifiedStatus = (status: boolean): string => {
  switch (status) {
    case true:
      return "Verified";
    case false:
      return "Unverified";
    default:
      return "Error";
  }
};

export {
  allProductUnits,
  allStorageLocation,
  allProductCategories,
  renderProductUnit,
  renderProductCategory,
  renderProductForGender,
  renderProductStorageLocation,
  renderProductDisplayLocation,
  renderProductActiveStatus,
  renderProductArchivedStatus,
  renderProductVerifiedStatus,
};

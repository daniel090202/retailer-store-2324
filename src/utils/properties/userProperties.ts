const renderUserGender = (gender: number): string => {
  switch (gender) {
    case 0:
      return "Male";
    case 1:
      return "Female";
    default:
      return "Other";
  }
};

const renderUserAddress = (address: number): string => {
  switch (address) {
    case 0:
      return "Ho Chi Minh";
    case 1:
      return "Binh Duong";
    case 2:
      return "Dong Nai";
    default:
      return "Unknown";
  }
};

const renderUserPosition = (position: number): string => {
  switch (position) {
    case 0:
      return "Administrator";
    case 1:
      return "Accountant";
    case 2:
      return "Sales assistant";
    default:
      return "Anonymous";
  }
};

const renderUserActiveStatus = (status: boolean): string => {
  switch (status) {
    case true:
      return "Active";
    case false:
      return "Inactive";
    default:
      return "Error";
  }
};

const renderUserBlockedStatus = (status: boolean): string => {
  switch (status) {
    case true:
      return "Blocked";
    case false:
      return "Unblocked";
    default:
      return "Error";
  }
};

const renderUserVerifiedStatus = (status: boolean): string => {
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
  renderUserGender,
  renderUserAddress,
  renderUserPosition,
  renderUserActiveStatus,
  renderUserBlockedStatus,
  renderUserVerifiedStatus,
};

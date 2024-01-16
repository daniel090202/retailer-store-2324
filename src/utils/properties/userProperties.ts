const renderUserGender = (gender: number) => {
  switch (gender) {
    case 0:
      return "Male";
    case 1:
      return "Female";
    default:
      return "Other";
  }
};

const renderUserPosition = (position: number) => {
  switch (position) {
    case 0:
      return "Sales assistant";
    case 1:
      return "Administrator";
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
  renderUserPosition,
  renderUserActiveStatus,
  renderUserBlockedStatus,
  renderUserVerifiedStatus,
};

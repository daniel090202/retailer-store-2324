const allCustomerLevels = ["Entry-level", "Silver", "Platinum", "Elite"];

const renderCustomerGender = (gender: number) => {
  switch (gender) {
    case 0:
      return "Male";
    case 1:
      return "Female";
    default:
      return "Other";
  }
};

const renderCustomerLevel = (segment: number) => {
  switch (segment) {
    case 0:
      return "Entry-level";
    case 1:
      return "Silver";
    case 2:
      return "Platinum";
    case 3:
      return "Elite";
    default:
      return "Error";
  }
};

const renderCustomerActiveStatus = (status: boolean): string => {
  switch (status) {
    case true:
      return "Active";
    case false:
      return "Inactive";
    default:
      return "Error";
  }
};

const renderCustomerBlockedStatus = (status: boolean): string => {
  switch (status) {
    case true:
      return "Blocked";
    case false:
      return "Unblocked";
    default:
      return "Error";
  }
};

const renderCustomerVerifiedStatus = (status: boolean): string => {
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
  allCustomerLevels,
  renderCustomerGender,
  renderCustomerLevel,
  renderCustomerActiveStatus,
  renderCustomerBlockedStatus,
  renderCustomerVerifiedStatus,
};

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
  if (segment === 0) {
    return "Entry-level";
  } else if (segment === 1) {
    return "Silver";
  } else if (segment === 2) {
    return "Platinum";
  } else if (segment === 3) {
    return "Elite";
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
  renderCustomerGender,
  renderCustomerLevel,
  renderCustomerActiveStatus,
  renderCustomerBlockedStatus,
  renderCustomerVerifiedStatus,
};

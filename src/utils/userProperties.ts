const renderUserGender = (gender: number) => {
  if (gender === 0) {
    return "Male";
  } else if (gender === 1) {
    return "Female";
  } else {
    return "Other";
  }
};

export { renderUserGender };

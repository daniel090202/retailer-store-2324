const renderCustomerLevel = (segment: number) => {
  if (segment === 0) {
    return "entry-level";
  } else if (segment === 1) {
    return "silver";
  } else if (segment === 2) {
    return "platinum";
  } else if (segment === 3) {
    return "elite";
  }
};

export { renderCustomerLevel };

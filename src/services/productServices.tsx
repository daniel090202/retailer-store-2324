const renderProductCategory = (category: number) => {
  if (category === 0) {
    return "Shirt";
  } else if (category === 1) {
    return "T-shirt";
  } else if (category === 2) {
    return "Sweater";
  }
};

export { renderProductCategory };

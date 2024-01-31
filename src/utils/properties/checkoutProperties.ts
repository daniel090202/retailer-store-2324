const allPaymentMethods = [
  "In cash",
  "Online banking",
  "Digital wallet",
  "Credit card",
];

const renderPaymentMethod = (paymentMethod: number) => {
  switch (paymentMethod) {
    case -1:
      return "Unchecked";
    case 0:
      return "In cash";
    case 1:
      return "Online banking";
    case 2:
      return "Digital wallet";
    case 3:
      return "Credit card";
    default:
      return "Invalid";
  }
};

export { allPaymentMethods, renderPaymentMethod };

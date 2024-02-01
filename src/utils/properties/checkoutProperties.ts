const allPaymentMethods = [
  "In cash",
  "Online banking",
  "Digital wallet",
  "Credit card",
];

const allPaymentStatus = [
  "Cash on delivery",
  "Successful",
  "Pending",
  "Failed",
  "Refunded",
  "Charged back",
];

const renderPaymentMethod = (paymentMethod: number): string => {
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

const renderPaymentStatus = (status: number): string => {
  switch (status) {
    case 0:
      return "Cash on delivery";
    case 1:
      return "Successful";
    case 2:
      return "Pending";
    case 3:
      return "Failed";
    case 4:
      return "Refunded";
    case 5:
      return "Charged back";
    default:
      return "Error";
  }
};

export {
  allPaymentMethods,
  allPaymentStatus,
  renderPaymentMethod,
  renderPaymentStatus,
};

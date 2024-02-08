const allNotificationDegree = ["normal", "important", "urgent"];
const allNotificationType = ["normal", "distribution", "salary"];

const renderNotificationDegree = (type: number) => {
  switch (type) {
    case 0:
      return "Normal";
    case 1:
      return "Important";
    case 2:
      return "Urgent";
    default:
      return "Uncategorized";
  }
};

const renderNotificationType = (degree: number) => {
  switch (degree) {
    case 0:
      return "Normal";
    case 1:
      return "Distribution";
    case 2:
      return "Salary";
    default:
      return "Uncategorized";
  }
};

export {
  allNotificationDegree,
  allNotificationType,
  renderNotificationDegree,
  renderNotificationType,
};

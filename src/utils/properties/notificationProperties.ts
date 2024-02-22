const allNotificationDegree = ["normal", "important", "urgent"];
const allNotificationType = ["normal", "distribution", "salary"];

const renderNotificationStatus = (status: boolean): string => {
  switch (status) {
    case true:
      return "Hidden";
    case false:
      return "Published";
    default:
      return "Draft";
  }
};

const renderNotificationStars = (degree: number): number => {
  switch (degree) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
    default:
      return 0;
  }
};

const renderNotificationTarget = (target: string) => {
  switch (target) {
    case "0":
      return "All";
    case "1":
      return "Administrator";
    case "2":
      return "Accountant";
    case "3":
      return "Sale assistants";
    default:
      return target;
  }
};

const renderNotificationDegree = (degree: number) => {
  switch (degree) {
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

const renderNotificationType = (type: number) => {
  switch (type) {
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
  renderNotificationStatus,
  renderNotificationStars,
  renderNotificationTarget,
  renderNotificationDegree,
  renderNotificationType,
};

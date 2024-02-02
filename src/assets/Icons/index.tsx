import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFaceSmile,
  faFaceSadTear,
} from "@fortawesome/free-regular-svg-icons";

import {
  faShopify,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faLock,
  faGear,
  faBars,
  faStar,
  faPlus,
  faUser,
  faUsers,
  faCheck,
  faXmark,
  faShirt,
  faMinus,
  faFilter,
  faCircle,
  faLockOpen,
  faArrowLeft,
  faUserGroup,
  faCaretDown,
  faListCheck,
  faBoxArchive,
  faAddressCard,
  faHandsBubbles,
  IconDefinition,
  faRightFromBracket,
  faCircleChevronLeft,
  faCircleChevronRight,
  faArrowUpRightFromSquare,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const wrapIcon = (icon: IconDefinition) => {
  return <FontAwesomeIcon icon={icon} />;
};

const icons = {
  gear: wrapIcon(faGear),
  lock: wrapIcon(faLock),
  user: wrapIcon(faUser),
  plus: wrapIcon(faPlus),
  minus: wrapIcon(faMinus),
  cross: wrapIcon(faXmark),
  shirt: wrapIcon(faShirt),
  check: wrapIcon(faCheck),
  users: wrapIcon(faUsers),
  menuBars: wrapIcon(faBars),
  filter: wrapIcon(faFilter),
  solidStar: wrapIcon(faStar),
  shopify: wrapIcon(faShopify),
  facebook: wrapIcon(faFacebook),
  solidCircle: wrapIcon(faCircle),
  archive: wrapIcon(faBoxArchive),
  faceSmile: wrapIcon(faFaceSmile),
  arrowLeft: wrapIcon(faArrowLeft),
  lockOpened: wrapIcon(faLockOpen),
  listCheck: wrapIcon(faListCheck),
  instagram: wrapIcon(faInstagram),
  caretDown: wrapIcon(faCaretDown),
  userGroup: wrapIcon(faUserGroup),
  faceTear: wrapIcon(faFaceSadTear),
  addressCard: wrapIcon(faAddressCard),
  handsWaving: wrapIcon(faHandsBubbles),
  entering: wrapIcon(faRightFromBracket),
  chevronLeft: wrapIcon(faCircleChevronLeft),
  chevronRight: wrapIcon(faCircleChevronRight),
  solidLinkDirect: wrapIcon(faArrowUpRightFromSquare),
};

export default icons;

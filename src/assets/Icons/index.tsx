import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faFilter,
  faCircle,
  faLockOpen,
  faArrowLeft,
  faUserGroup,
  faCaretDown,
  faListCheck,
  faBoxArchive,
  faAddressCard,
  IconDefinition,
  faRightFromBracket,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faShopify,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const wrapIcon = (icon: IconDefinition) => {
  return <FontAwesomeIcon icon={icon} />;
};

const icons = {
  gear: wrapIcon(faGear),
  lock: wrapIcon(faLock),
  user: wrapIcon(faUser),
  plus: wrapIcon(faPlus),
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
  arrowLeft: wrapIcon(faArrowLeft),
  lockOpened: wrapIcon(faLockOpen),
  listCheck: wrapIcon(faListCheck),
  instagram: wrapIcon(faInstagram),
  caretDown: wrapIcon(faCaretDown),
  userGroup: wrapIcon(faUserGroup),
  addressCard: wrapIcon(faAddressCard),
  logout: wrapIcon(faRightFromBracket),
  solidLinkDirect: wrapIcon(faArrowUpRightFromSquare),
};

export default icons;

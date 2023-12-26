import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faBars,
  faStar,
  faPlus,
  faUser,
  faUsers,
  faShirt,
  faFilter,
  faUserGroup,
  faCaretDown,
  faListCheck,
  faBoxArchive,
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
  user: wrapIcon(faUser),
  plus: wrapIcon(faPlus),
  shirt: wrapIcon(faShirt),
  users: wrapIcon(faUsers),
  filter: wrapIcon(faFilter),
  menuBars: wrapIcon(faBars),
  solidStar: wrapIcon(faStar),
  shopify: wrapIcon(faShopify),
  facebook: wrapIcon(faFacebook),
  archive: wrapIcon(faBoxArchive),
  listCheck: wrapIcon(faListCheck),
  instagram: wrapIcon(faInstagram),
  caretDown: wrapIcon(faCaretDown),
  userGroup: wrapIcon(faUserGroup),
  logout: wrapIcon(faRightFromBracket),
  solidLinkDirect: wrapIcon(faArrowUpRightFromSquare),
};

export default icons;

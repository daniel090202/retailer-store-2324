import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStar,
  faPlus,
  faUsers,
  faShirt,
  faUserGroup,
  faCaretDown,
  faBoxArchive,
  IconDefinition,
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
  plus: wrapIcon(faPlus),
  shirt: wrapIcon(faShirt),
  users: wrapIcon(faUsers),
  menuBars: wrapIcon(faBars),
  solidStar: wrapIcon(faStar),
  shopify: wrapIcon(faShopify),
  facebook: wrapIcon(faFacebook),
  archive: wrapIcon(faBoxArchive),
  instagram: wrapIcon(faInstagram),
  caretDown: wrapIcon(faCaretDown),
  userGroup: wrapIcon(faUserGroup),
  solidLinkDirect: wrapIcon(faArrowUpRightFromSquare),
};

export default icons;

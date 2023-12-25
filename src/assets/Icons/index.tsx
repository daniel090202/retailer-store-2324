import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStar,
  faUsers,
  faShirt,
  faUserGroup,
  faCaretDown,
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
  users: wrapIcon(faUsers),
  shirt: wrapIcon(faShirt),
  menuBars: wrapIcon(faBars),
  solidStar: wrapIcon(faStar),
  shopify: wrapIcon(faShopify),
  facebook: wrapIcon(faFacebook),
  instagram: wrapIcon(faInstagram),
  caretDown: wrapIcon(faCaretDown),
  userGroup: wrapIcon(faUserGroup),
  solidLinkDirect: wrapIcon(faArrowUpRightFromSquare),
};

export default icons;

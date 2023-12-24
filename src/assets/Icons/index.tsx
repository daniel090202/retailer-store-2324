import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStar,
  faCaretDown,
  IconDefinition,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const wrapIcon = (icon: IconDefinition) => {
  return <FontAwesomeIcon icon={icon} />;
};

const icons = {
  menuBars: wrapIcon(faBars),
  caretDown: wrapIcon(faCaretDown),
  solidStar: wrapIcon(faStar),
  solidLinkDirect: wrapIcon(faArrowUpRightFromSquare),
};

export default icons;

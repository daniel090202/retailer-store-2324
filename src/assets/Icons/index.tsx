import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const wrapIcon = (icon: IconDefinition) => {
  return <FontAwesomeIcon icon={icon} />;
};

const icons = {
  menuBars: wrapIcon(faBars),
  caretDown: wrapIcon(faCaretDown),
};

export default icons;

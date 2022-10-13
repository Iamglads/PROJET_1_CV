import { ImAccessibility } from "react-icons/im";
import { FiMail } from "react-icons/fi";

import { VscTools, VscBriefcase, VscMortarBoard } from "react-icons/vsc";

export const Links = [
  {
    name: "Qui suis-je ?",
    link: "/",
    icon: <ImAccessibility />,
  },
  {
    name: "Experiences",
    link: "/experiences",
    icon: <VscBriefcase />,
  },
  {
    name: "Formation",
    link: "/education",
    icon: <VscMortarBoard />,
  },
  {
    name: "Réalisations",
    link: "/realisations",
    icon: <VscTools />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <FiMail />,
  },
];

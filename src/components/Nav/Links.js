import { ImAccessibility } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { AiFillRead } from "react-icons/ai";

import {
  VscTools,
  VscBriefcase,
  VscMortarBoard,
  VscGithubInverted,
} from "react-icons/vsc";

import { FaFacebook } from "react-icons/fa";

export const Links = [
  {
    name: "Qui suis-je ?",
    link: "/#a-propos",
    icon: <ImAccessibility />,
  },
  {
    name: "Services",
    link: "/#services",
    icon: <VscBriefcase />,
  },
  {
    name: "Réalisations",
    link: "/#realisations",
    icon: <VscTools />,
  },
  {
    name: "Blog",
    link: "/#blog",
    icon: <AiFillRead />,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: <FiMail />,
  },
];

export const SocialMedia = [
  {
    icon: <GrLinkedin />,
    url: "https://www.linkedin.com/in/gladston-aristoverne/",
    class: "social-icon",
  },
  {
    icon: <VscGithubInverted />,
    url: "https://github.com/Iamglads",
    class: "social-icon",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/glad.toi.3",
    class: "social-icon",
  },
];

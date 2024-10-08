import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "WE ARE",
      desc: "the Huragan Motorsport Media Production",
      icon: <FaceSmileIcon />,
    },
    {
      title: "WE KNOW",
      desc: "how to shoot speedy cars that run in drifting, circuit racing, or any racing know how to make cinematic video in real time not just by a scenario",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "WE USE",
      desc: "all the power of storytelling",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "WE WORK",
      desc: "with any theme. Not just motorsport",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

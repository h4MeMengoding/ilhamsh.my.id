import { BsFillBootstrapFill } from 'react-icons/bs';
import { BsCamera2 } from 'react-icons/bs';
import {
  SiAdobe,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
  SiFirebase,
  SiJavascript,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  PHP: <SiPhp size={iconSize} className='text-blue-500' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  ),
  WordPress: <SiWordpress size={iconSize} />,
  Laravel: <SiLaravel size={iconSize} className='text-red-500' />,
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  Prisma: <SiPrisma size={iconSize} className='text-emerald-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-500' />,
  'Vue.js': <SiVuedotjs size={iconSize} className='text-green-500' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  Adobe: <SiAdobe size={iconSize} />,
  Canva: <SiCanva size={iconSize} className='text-sky-400' />,
  'Adobe Premiere Pro': <SiAdobepremierepro size={iconSize} />,
  'Adobe Audition': <SiAdobeaudition size={iconSize} />,
  'Adobe After Effects': <SiAdobeaftereffects size={iconSize} />,
  'Adobe Photoshop': <SiAdobephotoshop size={iconSize} />,
  'Director of Photography': <BsCamera2 size={iconSize} />,
};

import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { BiLogoFacebook } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGooglePlusG } from "react-icons/fa";

import { ISocialMediaLink } from '../../interface';
import { COMMON, SOCIAL_MEDIA_LINKS, LAYOUT_STYLES } from "../../constants";

const STYLES = LAYOUT_STYLES;

export const SocialLinks: FC = (): JSX.Element => {
   const socialMediaLinks: ISocialMediaLink[] = [
      {
         to: SOCIAL_MEDIA_LINKS.TWITTER,
         icon: <TiSocialTwitter />,
      },
      {
         to: SOCIAL_MEDIA_LINKS.FACEBOOK,
         icon: <BiLogoFacebook />,
      },
      {
         to: SOCIAL_MEDIA_LINKS.LINKEDIN,
         icon: <LiaLinkedinIn />,
      },
      {
         to: SOCIAL_MEDIA_LINKS.GOOGLE,
         icon: <FaGooglePlusG />,
      },
   ];

   return (
      <div className="flex items-center gap-x-2.5">
         {socialMediaLinks.map((link, index) => (
            <Link
            key={index}
            to={link.to}
            target={COMMON.LINK_TARGET}
            className={STYLES.SOCIAL_ICON}
            >
            {link.icon}
            </Link>
         
         ))}
      </div>
   );
};

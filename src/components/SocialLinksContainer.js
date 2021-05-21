import SocialLink from './SocialLink';
import { Flex } from './Commons';

import Instagram from '../assets/instagram-icon.png';
import SocialIcon from '../assets/social-icon.png';
import Twitter from '../assets/twitter-icon.png';
import YouTube from '../assets/youtube-icon.png';


const SocialLinksContainer = () => {
  return(
    <Flex justifyContent="center">

      <SocialLink socialUrl="https://www.instagram.com"
      imgIcon={Instagram} socialName="Instagram" />

      <SocialLink socialUrl="https://www.google.com"
      imgIcon={SocialIcon} socialName="SocialIcon" />

      <SocialLink socialUrl="https://www.twitter.com"
      imgIcon={Twitter} socialName="Twitter" />

      <SocialLink socialUrl="https://www.youtube.com"
      imgIcon={YouTube} socialName="YouTube" />

    </Flex>
  );
};

export default SocialLinksContainer;
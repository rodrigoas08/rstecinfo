import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
import { openLinkInNewTab } from 'utils/functions';
import { Portfolio, AboutMe, Contact, Skills } from 'templates';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <S.Wrapper>
        <S.WrapperText>
          <S.Name>Rodrigo Sobral</S.Name>
          <S.CarrerName>desenvolvedor front-end</S.CarrerName>
        </S.WrapperText>
        <S.NavIcons>
          <FaGithub
            onClick={() => openLinkInNewTab('https://github.com/rodrigoas08')}
            size={30}
            cursor="pointer"
            title="Github"
            key={0}
          />

          <FaLinkedin
            onClick={() =>
              openLinkInNewTab(
                'https://www.linkedin.com/in/rodrigo-sobral-302012aa/'
              )
            }
            size={30}
            cursor="pointer"
            title="LinkedIn"
            key={1}
          />
          <FaWhatsapp
            onClick={() =>
              openLinkInNewTab(
                'https://api.whatsapp.com/send?phone=5521985141580'
              )
            }
            size={30}
            cursor="pointer"
            title="Whatsapp"
            key={3}
          />
        </S.NavIcons>
      </S.Wrapper>
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};
export default Home;
AOS.init();
AOS.refresh();

import * as S from './styles';
import { Works } from 'templates';
import { Division } from 'components';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <>
      <S.Wrapper>
        <S.Section>
          <S.Title>
            Rodrigo Sobral<span>.</span>
          </S.Title>
          <S.Subtitle>
            Técnico em informática | estagiário desenvolvedor front-end
          </S.Subtitle>
        </S.Section>
        <Link
          activeClass="active"
          to="servicos"
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          Avançar
          <S.Arrow src={process.env.PUBLIC_URL + '/img/seta.svg'} />
        </Link>
      </S.Wrapper>
      {/* <Division /> */}
      <Works />
    </>
  );
};

export default Home;

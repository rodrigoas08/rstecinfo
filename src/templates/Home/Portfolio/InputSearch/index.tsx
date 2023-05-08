import styled, { css } from 'styled-components';
import { Input } from 'components/Input/styles';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

interface IInputSearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const InputSearch = ({ search, setSearch }: IInputSearchProps) => {
  return (
    <Wrapper>
      <SearchInput
        type="text"
        value={search}
        placeholder="Buscar"
        onChange={(event) => setSearch(event.target.value)}
      />
      <IconSearch size={15} title="Ícone de busca" />
    </Wrapper>
  );
};
export default InputSearch;

const Wrapper = styled.div`
  width: 30rem;
  margin-top: ${({ theme }) => theme.spacings.small};
`;

const SearchInput = styled(Input)`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 0;
    text-transform: none;
    text-overflow: ellipsis;
    transition: all 1.5s ease-in-out;
    background: ${theme.colors.grayIce};
    font-size: ${theme.font.sizes.medium};
    padding-left: ${theme.spacings.xxsmall};
    padding-right: ${theme.spacings.medium};

    :focus {
      background: transparent;
      border: 0.1rem solid transparent;
      transition: all 1.5s ease-in-out;
      border-bottom: 0.1rem solid ${theme.colors.primary};

      ::placeholder {
        color: transparent;
      }
    }
  `}
`;

const IconSearch = styled(SearchAlt)`
  position: absolute;
  fill: url('#gradient');
  transform: translate(-150%, 70%);
  filter: drop-shadow(0 0.3rem 0.2rem ${({ theme }) => theme.colors.black});
`;

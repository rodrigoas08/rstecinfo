import * as S from "./styles";
import routes from "utils/routes";
import { useState, memo } from "react";
import { navigate } from "@reach/router";
import { Button, Modal } from "components";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Wrapper>
      {/* se showModal for verdadeiro, exibe o modal ( o modal só aparecerá após ser clicado no botão "contact") */}
      {showModal && <Modal handleClose={() => setShowModal(false)} />}
      <S.ProfileWrapper>
        <S.ImageProfile onClick={() => navigate(routes.home)} />
      </S.ProfileWrapper>
      <S.NavWrapper>
        <Button secondary onClick={() => navigate(routes.home)}>
          Home
        </Button>
        <Button secondary onClick={() => setShowModal(true)}>
          Contato
        </Button>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);

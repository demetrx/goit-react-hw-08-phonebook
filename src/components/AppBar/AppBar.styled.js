import styled from '@emotion/styled';
import { ContainerStyled } from 'components/UI/Container/Container.styled';

export const Header = styled.header`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  min-height: 80px;
  padding: 15px 0;
  box-shadow: 0px 6px 5px -2px rgb(158, 158, 158);
`;

export const HeaderContainer = styled(ContainerStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

import styled from 'styled-components';
import { ContainerStyled } from 'components/UI/Container/Container.styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[4]}px 0;
  background-color: ${p => p.theme.colors.primary};
  border-bottom: ${p => p.theme.borders.thick} ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
`;

export const HeaderContainer = styled(ContainerStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px
    ${p => p.theme.space[1]}px;
  transition: color ${p => p.theme.transition};
  border-bottom: ${p => p.theme.borders.thick} transparent;

  &.active {
    border-color: ${p => p.theme.colors.white};
  }

  :hover {
    color: ${p => p.theme.colors.secondary};
  }
`;

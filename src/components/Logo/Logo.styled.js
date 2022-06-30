import { ReactComponent as LogoIcon } from './logo.svg';
import { layout, space } from 'styled-system';

import styled from 'styled-components';

export const Logo = styled(LogoIcon)`
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  transition: transform ${p => p.theme.transition};
  /* box-shadow: ${p =>
    p.shadowedd && 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}; */

  ${layout}
  ${space}

  :hover {
    transform: scale(1.15);
    cursor: pointer;
  }
`;

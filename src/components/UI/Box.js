import styled from 'styled-components';
import { color, space, layout, flexbox } from 'styled-system';

const Box = styled.div`
  align-items: center;
  gap: ${p => {
    return p.gap ? p.theme.space[p.gap] : 0;
  }}px;
  ${color}
  ${space}
  ${layout}
  ${flexbox}
`;

export default Box;

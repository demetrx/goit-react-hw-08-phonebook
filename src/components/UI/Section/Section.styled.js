import styled from 'styled-components';
import { space } from 'styled-system';

export const SectionStyled = styled.section`
  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.thick} ${p => p.theme.colors.accent};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  ${space}
`;

export const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  margin: -10px auto 20px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  padding: 0 ${p => p.theme.space[4]}px ${p => p.theme.space[2]}px;
  width: max-content;
`;

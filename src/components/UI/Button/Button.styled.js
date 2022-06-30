import styled from 'styled-components';
import { layout, position, space } from 'styled-system';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.secondary}`};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  transition: background-color ${p => p.theme.transition},
    border-color ${p => p.theme.transition};
  padding: ${p => p.theme.space[3]}px
    ${p => (p.isIcon ? p.theme.space[3] : p.theme.space[4])}px;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.secondary};
    border-color: ${p => p.theme.colors.white};
  }

  :disabled {
    cursor: initial;
  }

  ${layout}
  ${position}
  ${space}
`;

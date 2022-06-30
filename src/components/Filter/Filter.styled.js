import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const FilterInput = styled.input`
  border-radius: ${p => p.theme.radii.large};
  width: 370px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  transition: outline-color ${p => p.theme.transition};
  outline: 2px solid transparent;
  outline-offset: -4px;
  margin-bottom: ${p => p.theme.space[5]}px;

  :focus {
    outline-color: ${p => p.theme.colors.accent};
  }
`;

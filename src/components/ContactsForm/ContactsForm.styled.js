import styled from 'styled-components';
import { layout } from 'styled-system';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${layout}
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: ${p => p.theme.radii.input};
  margin: ${p => p.theme.space[2]}px 0 ${p => p.theme.space[4]}px;
  width: 100%;
  outline: 2px solid transparent;
  outline-offset: -5px;
  transition: outline-color ${p => p.theme.transition};

  :focus {
    outline-color: ${p => p.theme.colors.accent};
  }
`;

export const Submit = styled.button`
  padding: 8px 8px;
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.secondary};
  background-color: transparent;
  color: ${p => p.theme.colors.white};
  width: 100%;
`;

export const Error = styled.p`
  max-width: 100%;
  margin-top: -${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Display = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Label = styled.label``;

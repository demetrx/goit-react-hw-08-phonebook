import styled from 'styled-components';

export const FooterStyled = styled.footer`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.medium};
  max-width: 900px;
  padding: ${p => p.theme.space[4]}px 0;
  margin: 60px auto 0;
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
`;

export const Social = styled.a`
  text-decoration: underline;
  transition: color ${p => p.theme.transition};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;

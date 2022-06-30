import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  width: max-content;
  margin: 0 auto ${p => p.theme.space[5]}px;
  padding: 0 ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.primary};
  border-bottom: ${p => p.theme.borders.thick} ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.black};
`;

export const AuthLink = styled(Link)`
  color: ${p => p.theme.colors.accent};
  text-decoration: underline;
  transition: color ${p => p.theme.transition};

  :hover {
    color: ${p => p.theme.colors.secondary};
  }
`;
export const Auth = styled.section`
  width: 300px;
  margin: 100px auto 0;
  text-align: center;
`;

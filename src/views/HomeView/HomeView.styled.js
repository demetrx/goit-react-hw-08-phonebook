import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  color: ${p => p.theme.colors.primary};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.black};
  text-transform: uppercase;
`;

export const Moto = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: -${p => p.theme.space[4]}px;
`;

export const Greeting = styled.p`
  width: max-content;

  text-align: center;
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
  margin: ${p => p.theme.space[4]}px auto ${p => p.theme.space[4]}px;
  padding: 0 ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  text-decoration: underline;
`;

export const ContactsLink = styled(Link)`
  text-align: center;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: -${p => p.theme.space[5]}px;
  text-decoration: underline;
  transition: color ${p => p.theme.transition};

  :hover {
    color: ${p => p.theme.colors.secondary};
  }
`;

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: ${p => p.theme.space[6]}px;
`;

import styled from 'styled-components';

export const LoaderStyled = styled.div`
  position: fixed;
  right: 7vw;
  top: 15vh;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 4px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 800ms ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

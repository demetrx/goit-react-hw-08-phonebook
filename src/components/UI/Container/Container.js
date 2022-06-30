import { ContainerStyled } from './Container.styled';

const Container = ({ children, ...other }) => {
  return <ContainerStyled {...other}>{children}</ContainerStyled>;
};

export default Container;

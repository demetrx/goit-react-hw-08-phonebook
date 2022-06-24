import { createPortal } from 'react-dom';
import { LoaderStyled } from './Loader.styled';

const Loader = () =>
  createPortal(<LoaderStyled />, document.querySelector('#popup-root'));

export default Loader;

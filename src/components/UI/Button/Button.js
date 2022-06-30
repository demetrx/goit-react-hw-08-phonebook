import { StyledButton } from './Button.styled';

export const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
  ...other
}) => {
  return (
    <StyledButton
      {...other}
      type={type}
      disabled={disabled}
      isIcon={Icon && !children}
    >
      {Icon && <Icon size="16" />}
      {children}
    </StyledButton>
  );
};

import { StyledLink } from './BackArrowLink.styled';
import { TbArrowBack } from 'react-icons/tb';

export const BackArrowLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <TbArrowBack size="32" />
      {children}
    </StyledLink>
  );
};

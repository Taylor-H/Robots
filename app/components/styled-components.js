import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: normal;
  font-size: 15rem;
  line-height: 95px;
  text-align: center;
`;

const Title2 = styled.h2`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 63px;
  display: flex;
  align-items: center;
`;
const Nav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  height: 70px;
  padding: 10px;
`;
const StyledNavLink = styled(Link)`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  text-decoration-line: underline;
  padding: 15px;
  color: #000000;
`;
const StyledNavLinkHome = styled(StyledNavLink)`
  position: relative;
  right: 50%;
`;
const Title = styled.h1`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: normal;
  font-size: 5rem;
  line-height: 95px;
  text-align: center;
`;
const Title3 = styled.h3`
  font-size: 1rem;
  text-align: center;
`;
const Title6 = styled.h6`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const SingleViewWrapper = styled.section`
  padding: 4em;
  background: cream;
`;

const Button = styled.button`
  background: #30cdff;
  border-radius: 15px;
  text-decoration-line: underline;
  color: #000000;
`;
const AddButton = styled.button`
  background: #30cdff;
  border-radius: 15px;
  font-size: .5rem;
  text-decoration-line: underline;
  color: #ffffff;
  width: 5rem;
  height: 2.2rem;
  padding: .2rem;
  margin: .2rem;
`;
const GreenButton = styled.button`
  background: #27ae60;
  width: 10rem;
  height: 5rem;
`;
const DeleteButton = styled.button`
  width: 1.6rem;
  height: 1.2rem;
  text-align: center;
  background: #e68181;
`;
module.exports = {
  Title,
  Title2,
  Title3,
  Title6,
  Wrapper,
  Nav,
  StyledNavLink,
  StyledNavLinkHome,
  Button,
  Header,
  GreenButton,
  SingleViewWrapper,
  AddButton,
  DeleteButton,
};

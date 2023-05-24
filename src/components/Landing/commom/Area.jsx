import styled from 'styled-components';

const OutsideNavbar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #EF4444;
`
const InsideNav = styled.div`
  padding-left: 7px;
  padding-right: 7px;
  width: 100%;

  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

export default function Area (props) {
  return (
    <>
    <OutsideNavbar>{props.outsideNavbar}</OutsideNavbar>
    <InsideNav>{props.insideNav}</InsideNav>
    </>
  );
}

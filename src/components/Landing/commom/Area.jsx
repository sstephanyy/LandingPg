import styled from 'styled-components';

const OutsideNavbar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: black;

  `

const InsideNav = styled.div`
  padding-left: 7px;
  padding-right: 7px;
  width: 100%;
  max-width: 1000px;

`;


export default function Area (props) {
  return (
    <>
      <OutsideNavbar>
        <InsideNav>{props.children}</InsideNav>
      </OutsideNavbar>
    </>
  );
}

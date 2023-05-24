import styled from 'styled-components';

const OutsideNavbar = styled.div`
  display: flex;
  justify-content: center;
  background-color: #EF4444;
  width: 100%;
  `

const InsideNav = styled.div`
  padding-left: 7px;
  padding-right: 7px;
  width: 100%;
  max-width: 1000px;
  background-color: green;

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

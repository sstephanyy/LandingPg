import styled from 'styled-components';

const OutsideNavbar = styled.div`
  display: flex;
  justify-content: center;
  background-color: #EF4444;
  width: 100%;
  padding: 0px 210px;`

const InsideNav = styled.div`
  padding-left: 7px;
  padding-right: 7px;
  width: 100%;
  background-color: green;

  @media (min-width: 1280px) {
    width: 1200px;
  }
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

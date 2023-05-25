import styled from 'styled-components';

const Custompage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to right, #2d2727, #000, #2d2727);

`;

export function Page(props) {
  return (
    <div>
      <Custompage>{props.children}</Custompage>
      {/* the props.children expression represents the content that is passed between the opening and closing tags of a component.*/}
    </div>
  );
}

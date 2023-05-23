import styled from 'styled-components';

const Custompage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to right, #222f3e, #000, #222f3e);
 
`;

export function Page(props) {
  return (
    <div>
      <Custompage>{props.children}</Custompage>
    </div>
  );
}

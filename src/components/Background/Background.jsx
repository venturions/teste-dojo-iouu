import styled from 'styled-components';

const LoginBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  flex: 1;
`;

export default LoginBackground;

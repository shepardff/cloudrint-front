import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const Circle = styled.div`
  border-right: 10px solid transparent;
  border-radius: 50%;
  border-top: 10px solid ${props => props.theme.colors.christine};
  border-bottom: 10px solid ${props => props.theme.colors.christine};
  border-left: 10px solid ${props => props.theme.colors.christine};
  width: 100%;
  height: 100%;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => {
  return <Circle />;
};

export default Loader;

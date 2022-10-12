import styled, { keyframes } from 'styled-components';
import { observer } from 'mobx-react-lite';

import loaderStore from '../store/loaderStore';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

interface LoaderProps {
  active: boolean;
}

const LoaderContainer = styled.div<LoaderProps>`
  display: ${props => (props.active ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-right: 10px solid transparent;
  border-radius: 50%;
  border-top: 10px solid ${props => props.theme.colors.christine};
  border-bottom: 10px solid ${props => props.theme.colors.christine};
  border-left: 10px solid ${props => props.theme.colors.christine};
  animation: ${spin} 1s linear infinite;
`;

const LoaderMessage = styled.div`
  padding-top: 20px;
  font-size: 18px;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeight};
  color: ${props => props.theme.color};
`;

const Loader = observer(() => {
  return (
    <LoaderContainer active={loaderStore.loader.active}>
      <Circle />
      <LoaderMessage>{loaderStore.loader.msg && loaderStore.loader.msg}</LoaderMessage>
    </LoaderContainer>
  );
});

export default Loader;

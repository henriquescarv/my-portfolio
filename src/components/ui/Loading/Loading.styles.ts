import styled, { css, keyframes } from 'styled-components';
import defaultTheme from '../../../assets/styles/deafultTheme';

interface LoadingProps {
  size: number; 
}

export const Wrapper = styled.div`
  ${({size}: LoadingProps) => css`
    height: ${size}px;
    margin: 1px;
    width: ${size}px;
  `};
`;

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  ${({size}: LoadingProps) => css`
    animation: ${loadingAnimation} .6s linear infinite;
    width: ${size}px;
    padding: calc(${size}px / 8);
    aspect-ratio: 1;
    border-radius: 50%;
    background: ${defaultTheme.colors.white};
    --_m: 
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
  `};
`;


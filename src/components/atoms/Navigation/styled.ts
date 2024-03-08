import { media } from '@/styles/utils';
import styled from 'styled-components';
import { Button } from '..';

export const SideNavigationContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
  background-color: var(--background-color);
  opacity: 0.95;
`;

export const SideNavigationWrapper = styled.div<NavigationProps>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: var(--background-color-secondary);
  border: 4px solid var(--link-color);
  transition: left 0.3s ease-in-out;

  ${media.tablet`
    width: 400px;
    height: 500px;
    border-radius: 0 10px 10px 0;
  `}
`;

export const HomeButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: var(--background-color-tertiary);
  margin: 5px 0;
  transition: transform 0.3s ease-in-out;
`;

export const NavigationToggle = styled.div<NavigationProps>`
  position: absolute;
  z-index: 3;
  top: 1.25rem;
  left: 1.25rem;
  cursor: pointer;

  :nth-child(1) {
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg) translate(0.313rem, 0.313rem)' : 'none')};
  }

  :nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  }

  :nth-child(3) {
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg) translate(0.438rem, -0.438rem)' : 'none')};
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem 0.5rem;
  background-color: var(--background-color-tertiary);
  border-radius: 10px;
  border: 4px solid transparent;
`;

export const NavigationItem = styled.li`
  padding: 0.625rem 1.25rem;
`;

export const NavigationLink = styled(Button)`
  color: red;
  text-decoration: none;
  font-size: 2rem;
  
  &:hover {
    color: var(--link-hover-color);
  }
`;

type NavigationProps = {
    $isOpen: boolean;
  };
  
import React from 'react';
import { StyledIcon, ToggleContainer } from './styles';
import { ReactComponent as MoonIcon } from '../../assets/img/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/img/sun.svg';


const ToggleTheme = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={ theme === 'light' ? true : false }>
      {theme === 'light' ? <MoonIcon/> : <SunIcon/>}
    </ToggleContainer>
  );
};

export default ToggleTheme;
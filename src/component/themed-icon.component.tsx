import React from 'react';
import {IconElement, IconProps} from '@ui-kitten/components';
import {ImageStyle} from 'react-native';
import {ThemeContextValue, Theming} from '../serivce/theme.service';

interface ThemedIconProps extends Omit<IconProps, 'name'> {
  light: (style: ImageStyle) => IconElement;
  dark: (style: ImageStyle) => IconElement;
}

const ThemedIcon = (props: ThemedIconProps) => {
  const themeContext: ThemeContextValue = React.useContext(
    Theming.ThemeContext,
  );
  const {light, dark, ...iconProps} = props;
  return themeContext.isDarkMode() ? dark(iconProps) : light(iconProps);
};

export default ThemedIcon;

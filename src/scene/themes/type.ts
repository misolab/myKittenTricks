import {ThemeType} from '@ui-kitten/components';
import {Theme} from '../../serivce/theme.service';

export interface ThemeItem {
  mapping: string;
  name: Theme;
  theme: ThemeType;
}

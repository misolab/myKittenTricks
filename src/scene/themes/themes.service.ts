import {Mapping, Theme} from '../../serivce/theme.service';
import {ThemeItem} from './type';

export default class ThemesService {
  static createThemeListItems = (themes, mapping: Mapping): ThemeItem[] => {
    return Object.keys(themes[mapping])
      .filter(key => key !== 'brand')
      .map((theme: Theme) =>
        ThemesService.createThemeForMapping(themes, mapping, theme),
      );
  };

  static createThemeForMapping = (themes, mapping: Mapping, theme: Theme) => {
    return {
      mapping,
      name: theme,
      theme: themes[mapping][theme],
    };
  };
}

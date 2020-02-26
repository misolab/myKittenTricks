import React from 'react';
import {Image, ImageRequireSource} from 'react-native';

/**
 * https://akveo.github.io/react-native-ui-kitten/docs/guides/icon-packages#3rd-party-icon-packages
 */
const IconProvider = (source: ImageRequireSource) => ({
  toReactElement: ({animation, ...style}) => (
    <Image style={style} source={source} />
  ),
});

export const AppIconsPack = {
  name: 'app',
  icons: {
    auth: IconProvider(require('../asset/images/icon-auth.png')),
    'auth-dark': IconProvider(require('../asset/images/icon-auth-dark.png')),
    social: IconProvider(require('../asset/images/icon-social.png')),
    'social-dark': IconProvider(
      require('../asset/images/icon-social-dark.png'),
    ),
    articles: IconProvider(require('../asset/images/icon-articles.png')),
    'articles-dark': IconProvider(
      require('../asset/images/icon-articles-dark.png'),
    ),
    messaging: IconProvider(require('../asset/images/icon-messaging.png')),
    'messaging-dark': IconProvider(
      require('../asset/images/icon-messaging-dark.png'),
    ),
    dashboards: IconProvider(require('../asset/images/icon-dashboards.png')),
    'dashboards-dark': IconProvider(
      require('../asset/images/icon-dashboards-dark.png'),
    ),
    ecommerce: IconProvider(require('../asset/images/icon-ecommerce.png')),
    'ecommerce-dark': IconProvider(
      require('../asset/images/icon-ecommerce-dark.png'),
    ),
    autocomplete: IconProvider(
      require('../asset/images/icon-autocomplete.png'),
    ),
    'autocomplete-dark': IconProvider(
      require('../asset/images/icon-autocomplete-dark.png'),
    ),
    avatar: IconProvider(require('../asset/images/icon-avatar.png')),
    'avatar-dark': IconProvider(
      require('../asset/images/icon-avatar-dark.png'),
    ),
    'bottom-navigation': IconProvider(
      require('../asset/images/icon-bottom-navigation.png'),
    ),
    'bottom-navigation-dark': IconProvider(
      require('../asset/images/icon-bottom-navigation-dark.png'),
    ),
    button: IconProvider(require('../asset/images/icon-button.png')),
    'button-dark': IconProvider(
      require('../asset/images/icon-button-dark.png'),
    ),
    'button-group': IconProvider(
      require('../asset/images/icon-button-group.png'),
    ),
    'button-group-dark': IconProvider(
      require('../asset/images/icon-button-group-dark.png'),
    ),
    calendar: IconProvider(require('../asset/images/icon-calendar.png')),
    'calendar-dark': IconProvider(
      require('../asset/images/icon-calendar-dark.png'),
    ),
    card: IconProvider(require('../asset/images/icon-card.png')),
    'card-dark': IconProvider(require('../asset/images/icon-card-dark.png')),
    'check-box': IconProvider(require('../asset/images/icon-checkbox.png')),
    'check-box-dark': IconProvider(
      require('../asset/images/icon-checkbox-dark.png'),
    ),
    datepicker: IconProvider(require('../asset/images/icon-datepicker.png')),
    'datepicker-dark': IconProvider(
      require('../asset/images/icon-datepicker-dark.png'),
    ),
    drawer: IconProvider(require('../asset/images/icon-drawer.png')),
    'drawer-dark': IconProvider(
      require('../asset/images/icon-drawer-dark.png'),
    ),
    icon: IconProvider(require('../asset/images/icon-icon.png')),
    'icon-dark': IconProvider(require('../asset/images/icon-icon-dark.png')),
    input: IconProvider(require('../asset/images/icon-input.png')),
    'input-dark': IconProvider(require('../asset/images/icon-input-dark.png')),
    list: IconProvider(require('../asset/images/icon-list.png')),
    'list-dark': IconProvider(require('../asset/images/icon-list-dark.png')),
    menu: IconProvider(require('../asset/images/icon-menu.png')),
    'menu-dark': IconProvider(require('../asset/images/icon-menu-dark.png')),
    modal: IconProvider(require('../asset/images/icon-modal.png')),
    'modal-dark': IconProvider(require('../asset/images/icon-modal-dark.png')),
    'overflow-menu': IconProvider(
      require('../asset/images/icon-overflow-menu.png'),
    ),
    'overflow-menu-dark': IconProvider(
      require('../asset/images/icon-overflow-menu-dark.png'),
    ),
    popover: IconProvider(require('../asset/images/icon-popover.png')),
    'popover-dark': IconProvider(
      require('../asset/images/icon-popover-dark.png'),
    ),
    radio: IconProvider(require('../asset/images/icon-radio.png')),
    'radio-dark': IconProvider(require('../asset/images/icon-radio-dark.png')),
    select: IconProvider(require('../asset/images/icon-select.png')),
    'select-dark': IconProvider(
      require('../asset/images/icon-select-dark.png'),
    ),
    spinner: IconProvider(require('../asset/images/icon-spinner.png')),
    'spinner-dark': IconProvider(
      require('../asset/images/icon-spinner-dark.png'),
    ),
    'tab-view': IconProvider(require('../asset/images/icon-tab-view.png')),
    'tab-view-dark': IconProvider(
      require('../asset/images/icon-tab-view-dark.png'),
    ),
    text: IconProvider(require('../asset/images/icon-text.png')),
    'text-dark': IconProvider(require('../asset/images/icon-text-dark.png')),
    toggle: IconProvider(require('../asset/images/icon-toggle.png')),
    'toggle-dark': IconProvider(
      require('../asset/images/icon-toggle-dark.png'),
    ),
    tooltip: IconProvider(require('../asset/images/icon-tooltip.png')),
    'tooltip-dark': IconProvider(
      require('../asset/images/icon-tooltip-dark.png'),
    ),
    'top-navigation': IconProvider(
      require('../asset/images/icon-top-navigation.png'),
    ),
    'top-navigation-dark': IconProvider(
      require('../asset/images/icon-top-navigation-dark.png'),
    ),
  },
};

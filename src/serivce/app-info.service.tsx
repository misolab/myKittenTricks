import DeviceInfo from 'react-native-device-info';

export default class AppInfoService {
  static getVersion = () => DeviceInfo.getVersion();

  static getBuildNumber = () => DeviceInfo.getBuildNumber();
}

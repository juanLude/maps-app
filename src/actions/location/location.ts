import Geolocation from '@react-native-community/geolocation';

export const getCurrentLocation = () => {
  Geolocation.getCurrentPosition();
};

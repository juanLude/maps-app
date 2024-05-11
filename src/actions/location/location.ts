/* eslint-disable @typescript-eslint/no-unused-vars */
import {Location} from './../../infrastructure/interfaces/location';
import Geolocation from '@react-native-community/geolocation';

export const getCurrentLocation = async (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      info => {
        resolve({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      error => {
        console.log("Can't get location");
        reject(error);
      },
      {
        enableHighAccuracy: true,
      },
    );
  });
};
export const clearWatchLocation = (watchId: number) => {
  Geolocation.clearWatch(watchId);
};
export const watchCurrentLocation = (
  locationCallback: (Location: Location) => void,
): number => {
  return Geolocation.watchPosition(
    info =>
      locationCallback({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      }),
    error => {
      throw new Error("Can't get watch position");
    },
    {
      enableHighAccuracy: true,
    },
  );
};

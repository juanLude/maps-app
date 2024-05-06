/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/styles';
import {usePermissionStore} from '../../store/permissions/usePermissionStore';

export const PermissionScreen = () => {
  const {locationStatus, requestLocationPermission} = usePermissionStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Enable location</Text>
      <Pressable
        style={globalStyles.btnPrimary}
        onPress={requestLocationPermission}>
        <Text>Enable location</Text>
      </Pressable>

      <Text>Current State: {locationStatus} </Text>
    </View>
  );
};

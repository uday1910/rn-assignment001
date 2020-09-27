import { NativeModules, Alert } from 'react-native';

import { IS_IOS } from '../constants/constant';

export const checkForDeviceOrSimulator = () => {
    if (IS_IOS) {
        const deviceCheck = NativeModules.CheckSimulator;
        deviceCheck.checkForDeviceOrSimulator((isDevice: string) => {
            console.log('Received Flag value', isDevice);
            if (isDevice === 'true') {
                Alert.alert('This application is runnng on actual device.')
            } else if (isDevice === 'false') {
                Alert.alert('This application is runnng on simulator / emulator.')
            } else {
                Alert.alert('Received value', isDevice)
            }
        });
    }
}

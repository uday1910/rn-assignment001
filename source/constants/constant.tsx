/**
 * React native imports
 */
import {Dimensions, Platform} from 'react-native';

/**
 * For device window height
 */
export const windowHeight = Dimensions.get('window').height;

/**
 * For device window width
 */
export const windowWidth = Dimensions.get('window').width;

/**
 * Its Check if device OS is Android
 */
export const IS_ANDROID = Platform.OS === 'android';

/**
 * Its Check if device OS is iOS
 */
export const IS_IOS = Platform.OS === 'ios';

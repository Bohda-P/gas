import { ImageStyle, TextStyle, StyleProp, ViewStyle } from 'react-native';

type StyleProps = StyleProp<ViewStyle | TextStyle | ImageStyle> | StyleProp | StyleProp[];

declare global {
  namespace Styled {
    interface Shared {
      style?: StyleProps | StyleProps[];
    }
  }
}

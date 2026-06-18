import type { ImageSourcePropType } from "react-native";

declare global {
    interface TabIconProps {
        source: ImageSourcePropType;
        focused: boolean;
    }
}
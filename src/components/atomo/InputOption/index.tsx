import { color } from "@/src/styles/colors";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useState } from "react";

type Props = TouchableOpacityProps & {
    text: string;
    onChange: (text: string) => void;
};

export default function InpuOption({ text, onChange, ...props }: Props) {
    const [isSelected, setIsSelected] = useState(false);

    const handlePress = () => {
        if (isSelected){
            setIsSelected(!isSelected);
            onChange("")
        } else {
            onChange(text);
            setIsSelected(!isSelected);
        }
    };

    return (
        <TouchableOpacity
            {...props}
            style={[styles.Container, isSelected && styles.selectedContainer]}
            onPress={handlePress}
        >
            <Text style={[styles.text, isSelected && styles.selectedText]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Container: {
        alignSelf: "flex-start",
        backgroundColor: color.utils.white,
        borderRadius: 10,
        paddingHorizontal: 18,
        paddingVertical: 10,
    },

    selectedContainer: {
        backgroundColor: color.green[50],
    },

    text: {
        fontWeight: "500",
        color: color.gray[600],
    },

    selectedText: {
        color: color.green[500],
    },
});

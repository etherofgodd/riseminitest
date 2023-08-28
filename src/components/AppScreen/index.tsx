import {ViewStyle, ScrollView} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./style";

type Props = {
    children: React.ReactNode;
    style?: ViewStyle;
    scrollable?: boolean;
};

const Index = ({children, style, scrollable}: Props) => {

    //This is the main wrapper for my default app screen, in this component, you can add validations, dispatch general modals and handle inactivity if you want.
    return (
        <SafeAreaView edges={["top"]} style={[styles.container, style]}>
            {scrollable ? (
                <ScrollView
                    bounces={false}
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                >
                    {children}
                </ScrollView>
            ) : (
                children
            )}
        </SafeAreaView>
    );
};

export default Index;

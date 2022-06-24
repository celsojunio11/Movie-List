import { ReactNode } from "react";
import { Modal, View, ModalProps, StyleSheet, TouchableWithoutFeedback } from "react-native";
import utils from "../../utils/utils";

interface Props extends ModalProps {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props) {
    return (

        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}

        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <View style={styles.bar}/>
                            { children }
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        backgroundColor: utils.colors.black_light
    },
    overlay: {
        flex: 1,
        backgroundColor: utils.colors.overlay
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: utils.colors.green_light,
        alingSelf: "center",
        marginTop: 13
    }
})
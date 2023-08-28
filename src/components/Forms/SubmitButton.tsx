import React, {FC} from "react";
import {useFormikContext} from "formik";
import {AppButton} from "@/components/AppButton";


interface Props {
    title: string;
    disabled?: boolean;
    inverted?: boolean;
    loading?: boolean;
}

const SubmitButton: FC<Props> = ({title, inverted, disabled,loading}) => {
    const { handleSubmit, isValid, dirty } = useFormikContext();

    return (
        <AppButton
            inverted={inverted}
            title={title}
            onPress={handleSubmit}
            loading={loading}
            disabled={disabled || !isValid || !dirty}
        />
    );
};

export default SubmitButton;

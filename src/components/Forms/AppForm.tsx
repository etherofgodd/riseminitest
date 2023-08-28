import {IAuthFormTypes} from "@/types/authTypes";
import {Formik, FormikHelpers} from "formik";
import {FC} from "react";


type FormProps = {
  initialValues: IAuthFormTypes;
  onSubmit: (
    values: IAuthFormTypes,
    formikHelpers: FormikHelpers<IAuthFormTypes>
  ) => void | Promise<any>;
  validationSchema?: (() => any) | any;
  children: React.ReactNode;
};

const AuthForm: FC<FormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      enableReinitialize={ true }
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
    >
      { () => <>{ children }</> }
    </Formik>
  );
};

export default AuthForm;

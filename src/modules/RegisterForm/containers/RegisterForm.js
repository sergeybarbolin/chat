import { withFormik } from 'formik';
import RegisterForm from './../components/RegisterForm';
import validateForm from './../../../utils/helpers/validate';

export default withFormik({
    mapPropsToValues: () => ({ 
        email: null,
        password: null
    }),

    validate: values => validateForm({ isAuth: false, values }),

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',

})(RegisterForm);
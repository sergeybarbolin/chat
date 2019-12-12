import { withFormik } from 'formik';
import RegisterForm from './../components/RegisterForm';

export default withFormik({
    // mapPropsToValues: () => ({ email: 'barbolin@mail.com' }),

    validate: values => {
        let errors = {};

        if (!values.email) {
            errors.email = 'Введите адрес эл. почты';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                values.email
            )
        ) {
            errors.email = 'Некорректный адрес эл. почты';
        }

        if (!values.password) {
            errors.password = 'Введите пароль'
        } else if ( 
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/i.test(values.password)
        ) {
            errors.password = 'Слишком лёгкий пароль'
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',

})(RegisterForm);;
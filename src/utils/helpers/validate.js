export default ({ isAuth, values }) => {
    let errors = {};
    const rules = {
        email: value => {
            if (!value) {
                errors.email = 'Введите адрес эл. почты';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    value
                )
            ) {
                errors.email = 'Некорректный адрес эл. почты';
            }
        },

        password: value => {
            if (!value) {
                errors.password = 'Введите пароль'
            } else if ( 
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/i.test(value)
            ) {
                errors.password = isAuth ? 'Неверный пароль' : 'Пароль должен содержать латинские буквы и минимум одну цифру.'
            }
        }
    }

    Object.keys(values).forEach(
        key => rules[key] && rules[key](values[key])
    );

    return errors;
};
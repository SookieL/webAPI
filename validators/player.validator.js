import yup from 'yup';

export const playerValidator = yup.object().shape({
    email: yup.string().email().required(),
    firstname: yup.string(),
    lastname: yup.string()
});

export const playerDataValidator = yup.object().shape({
    firstname: yup.string(),
    lastname: yup.string()
});
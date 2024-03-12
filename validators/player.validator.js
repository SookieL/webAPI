import yup from 'yup';

/**
 * Modele joueur pour l'ajout
 * @typedef {object} Player
 * @property {string} email.required
 * @property {string} firstname
 * @property {string} lastname
 */
export const playerValidator = yup.object().shape({
    email: yup.string().email().required(),
    firstname: yup.string(),
    lastname: yup.string()
});

/**
 * Modele joueur pour la mise à jour
 * @typedef {object} PlayerData
 * @property {string} firstname
 * @property {string} lastname
 */
export const playerDataValidator = yup.object().shape({
    firstname: yup.string(),
    lastname: yup.string()
});
// Générer un juste prix
export const genererJustePrix = (prixMax: number): number => {
    return Math.ceil(Math.random() * prixMax);
}

// l'utilisateur soummet un nombre pour deviner

// on compare le nombre de l'utilisateur avec le juste prix
// si l'utilisateur trouve le bon prix il a gagné
// sinon il perd un vie (tentative) et on lui indique "c'est plus" ou "c'est moins"

export const comparer = (nombreUtilisateur: number, justePrix: number) => {
    if (nombreUtilisateur < justePrix) return 'C\'est plus';
    if (nombreUtilisateur > justePrix) return 'C\'est moins';
    return 'C\'est gagné !'
}

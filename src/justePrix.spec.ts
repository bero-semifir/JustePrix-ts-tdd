import { comparer, peutJouer } from './justePrix';

describe('JustePrix', () => {
    describe('Comparer', () => {
        const justePrix = 500;
        test('doit afficher c\'est plus quand la proposition est inférieure au juste prix', () => {
            expect(comparer(200, justePrix)).toBe('C\'est plus');
            expect(comparer(0, justePrix)).toBe('C\'est plus');
            expect(comparer(499, justePrix)).toBe('C\'est plus');
        });
        test('doit afficher c\'est moins quand la proposition est supérieure au juste prix', () => {
            expect(comparer(700, justePrix)).toBe('C\'est moins');
            expect(comparer(1000, justePrix)).toBe('C\'est moins');
            expect(comparer(501, justePrix)).toBe('C\'est moins');
        });

        test('doit afficher "c\'est gagné !" quand le prix est juste', ()=>{
            expect(comparer(justePrix, justePrix)).toBe('C\'est gagné !')
        })

    });

    describe('peutJouer', () => { 
        test('doit retourner vrais si le nombre de vie est supérieur à 0', () => { 
            expect(peutJouer(1)).toBe(true);
            expect(peutJouer(7)).toBe(true);
            expect(peutJouer(70)).toBe(true);
         })
        test('doit retourner faux si le nombre de vie est à 0', () => { 
            expect(peutJouer(0)).toBe(false);
         })
     })
});

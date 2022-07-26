import { comparer } from './justePrix';

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
});

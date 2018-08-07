class Transcriptor {
    toRna(dna) {
        const map = {
            'A': 'U',
            'C': 'G',
            'G': 'C',
            'T': 'A'
        };
        let rna = [];

        for (let index = 0; index < dna.length; index++) {
            let value = map[dna[index]] || dna[index];

            if (value === dna[index]) {
                throw new Error('Invalid input DNA.');
            }

            rna.push(value);
        }
        
        return rna.join('');
    }
}

export default Transcriptor;

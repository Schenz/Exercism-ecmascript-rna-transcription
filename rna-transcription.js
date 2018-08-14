class Transcriptor {
    toRna(dna) {
        const map = {
            'A': 'U',
            'C': 'G',
            'G': 'C',
            'T': 'A'
        };

        return dna.split('').reduce((accumulator, currentValue) => {
            let value = map[currentValue] || currentValue;

            if (value === currentValue) {
                throw new Error('Invalid input DNA.');
            }

            return accumulator + value;
        }, '');
    }
}

export default Transcriptor;
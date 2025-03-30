import cowsay from 'cowsay'
const NAME = process.env.NAME
const CAMPUS = process.env.CAMPUS

console.log(cowsay.say({
    text : `I'm ${NAME} from ${CAMPUS} !`,
    e : "oO",
    T : "U "
}));

var pronoun = ['the', 'our'];
var adj = ['great', 'big', 'last'];
var noun = ['jogger', 'racoon', 'us'];
var domain = ['com', 'net', 'us', 'io', 'cr'];


GenerarUrlWeb();

function GenerarUrlWeb() {
    let urlGenerados = new Array() //se recorren los arrays uno dentro de otro para lograr la distribucion con todos 
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let z = 0; z < noun.length; z++) {
                for (let y = 0; y < domain.length; y++) {
                   console.log(pronoun[i] + adj[j] + HackDomain(noun[z],domain[y]) + '.' + domain[y]);
                 //   HackDomain(HackDomain(noun[z]))
                }
            }
        }
    }
}

//funcion que busca la conicidencia sobre noun valida si es igual a el domain para quitarlo
function HackDomain(value,domain) {

    for (var i = 0; i < domain.length; i++) {
        let check = domain[i]
        let search = new RegExp(check)  // se va colocando una expresion regular nueva del array de domain
     //   console.log(search)
        if(search.test(value)){ // se valida si la expresion regilar esta contenidad en el noun para eliminarlo
            value = value.replace(search, ''); // se procede a remplazar la concidencia de domain por nada
        }
        
    }
    return value; //retorna el noun  sin la coincidencia del domain
}
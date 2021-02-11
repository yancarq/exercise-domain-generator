var pronoun = ['the', 'our'];
var adj = ['great', 'big', 'last'];
var noun = ['jogger', 'racoon', 'us'];
var domain = ['com', 'net', 'us', 'io', 'cr'];


GenerarUrlWeb();

function GenerarUrlWeb() {
    let urlGenerados = new Array()
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
        let search = new RegExp(check)
     //   console.log(search)
        if(search.test(value)){
            value = value.replace(search, '');
        }
        
    }
    return value;
}
console.log("Start yaquoi extention")


let metasGenerator = [] 
const metas = document.getElementsByTagName('meta');

for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === "generator") {
        metasGenerator.push(metas[i].getAttribute('content'))
    }
  }

if ((metasGenerator == "") && (!metasGenerator)) {
    console.log("aucune balise meta generator trouvée")
} else {
    console.log(metasGenerator)
}
console.log("End off yaquoi extention")
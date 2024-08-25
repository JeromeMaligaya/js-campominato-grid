//Check link
console.log('JS OK')

// funzione creazione cella con dom-API
function createCell(content){
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.append(content);

    return cell;
};
console.log

// 1.recupero l'elemento dal Dom (grid, button)
const grid = document.getElementById('grid');
const button = document.querySelector('header button');

//2.raccolta dati (grid values)
const rows = 10;
const cols = 10;
const totCells = rows * cols;

// 3.lavorazione dati
// evento al bottone
button.addEventListener('click',function(){
    // ciclo for
    
    for (let i = 1; i <= totCells; i++){
        // creo a monte funz createCell
        // invoco la funz createCell
        // numerare le celle [i]
        const cell = createCell(i);
        
        //evento alla cella x cambio colore e console log n' cella
        cell.addEventListener('click', function(){
            // aggiungo/rimuovo la classe clicked
            cell.classList.toggle('clicked');
            // stampo in console il numero della cella cliccata
            console.log(`Hai cliccato la cella n'${cell.innerText}`);
        })
        
        // 4.generazione output
        // stampo in pagina
        grid.appendChild(cell);
        console.log(cell);
    }
    
    
   
    
})
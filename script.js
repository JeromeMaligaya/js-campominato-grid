//Check link
console.log('JS OK')

// funzione creazione cella con dom-API
function createCell(numberCells){
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.append(numberCells);

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
    let cell = '';
    for (let i = 1; i <= totCells; i++){
        // creo a monte funz createCell
        // invoco la funz createCell
        // numerare le celle [i]
        cell = createCell(i);
        
        
        // 4.generazione output
        // stampo in pagina
        grid.append(cell)
        console.log(cell)
    }
    
    
   
    //evento alla cella x cambio colore e console log n cella
})
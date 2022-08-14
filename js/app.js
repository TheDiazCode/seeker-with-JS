const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const answer = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;

const datoBuscado = {
    marca: '',
    year : '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

document.addEventListener('DOMContentLoaded',()=>{
    ShowCars();
    CompleteYearSelect();
});

marca.addEventListener('change',e=>{
    datoBuscado.marca = e.target.value;
    FiltrarAuto();
});
year.addEventListener('change',e=>{
    datoBuscado.year = e.target.value;
    FiltrarAuto();
});
minimo.addEventListener('change',e=>{
    datoBuscado.minimo = e.target.value;
});
maximo.addEventListener('change',e=>{
    datoBuscado.maximo = e.target.value;
});
puertas.addEventListener('change',e=>{
    datoBuscado.puertas = e.target.value;
});
transmision.addEventListener('change',e=>{
    datoBuscado.transmision = e.target.value;
});
color.addEventListener('change',e=>{
    datoBuscado.color = e.target.value;
});

function ShowCars(){
    autos.forEach(auto => {
        const {marca,modelo,year,puertas,transmision,precio,color}=auto;
        const carHTML = document.createElement('p');
        carHTML.textContent = `
            ${marca}  ${modelo} -  ${year} -  ${puertas} puertas - transmision: ${transmision} - precio: ${precio} - color:  ${color}
        `;
        answer.appendChild(carHTML);
    });
}

function CompleteYearSelect(){
    for(let i = max; i > min;i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

function FiltrarAuto(){
    const resultado = autos.filter(FiltrarMarca).filter(FiltrarYear);
    console.log(resultado);
}

function FiltrarMarca(auto){
    if(datoBuscado.marca){
        return auto.marca ===datoBuscado.marca;
    }
    return auto;
}

function FiltrarYear(auto){
    if(datoBuscado.year){
        return auto.year === parseInt(datoBuscado.year);
    }
    return auto;
}

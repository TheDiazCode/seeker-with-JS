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
    ShowCars(autos);
    CompleteYearSelect();
});

marca.addEventListener('change',e=>{
    datoBuscado.marca = e.target.value;
    FiltrarAuto(autos);
});
year.addEventListener('change',e=>{
    datoBuscado.year = e.target.value;
    FiltrarAuto();
});
minimo.addEventListener('change',e=>{
    datoBuscado.minimo = e.target.value;
    FiltrarAuto();
});
maximo.addEventListener('change',e=>{
    datoBuscado.maximo = e.target.value;
    FiltrarAuto();
});
puertas.addEventListener('change',e=>{
    datoBuscado.puertas = e.target.value;
    FiltrarAuto();
});
transmision.addEventListener('change',e=>{
    datoBuscado.transmision = e.target.value;
    FiltrarAuto();
});
color.addEventListener('change',e=>{
    datoBuscado.color = e.target.value;
    FiltrarAuto();
});

function ShowCars(autos){
    LimpiarHTML();
    autos.forEach(auto => {
        const {marca,modelo,year,puertas,transmision,precio,color}=auto;
        const carHTML = document.createElement('p');
        carHTML.textContent = `
            ${marca}  ${modelo} -  ${year} -  ${puertas} puertas - transmision: ${transmision} - precio: ${precio} - color:  ${color}
        `;
        answer.appendChild(carHTML);
    });
}

function LimpiarHTML(){
    while(answer.firstChild){
        answer.removeChild(answer.firstChild);
    }
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
    const resultado = autos.filter(FiltrarMarca).filter(FiltrarYear).filter(FiltrarMinimo).filter(FiltrarMaximo).filter(FiltrarPuertas).filter(FiltrarTransmision).filter(FiltrarColor);
    if(resultado.length){
        ShowCars(resultado);
    }else{
        LimpiarHTML();
        const resp = document.createElement('div');
        resp.classList.add('alerta','error');
        resp.textContent = 'No se encontraron resultados';
        resultado.appendChild(resp);
    }
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

function FiltrarMinimo(auto){
    if(datoBuscado.minimo){
        return auto.precio >= parseInt(datoBuscado.minimo);
    }
    return auto;
}

function FiltrarMaximo(auto){
    if(datoBuscado.maximo){
        return auto.precio <= parseInt(datoBuscado.maximo);
    }
    return auto;
}

function FiltrarPuertas(auto){
    if(datoBuscado.puertas){
        return auto.puertas === parseInt(datoBuscado.puertas);
    }
    return auto;
}

function FiltrarTransmision(auto){
    if(datoBuscado.transmision){
        return auto.transmision === datoBuscado.transmision;
    } 
    return auto;
}

function FiltrarColor(auto){
    if(datoBuscado.color){
        return auto.color === datoBuscado.color;
    }
    return auto;
}
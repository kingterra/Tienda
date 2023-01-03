const btnDepartamentos = document.getElementById('btn-departamentos'),
      grid = document.getElementById('grid'),
      esDispositivoMovil= () =>{
      	if(window.innerWidth <= 800){
      		return true;
      	}else{
      		return false;
      	}
      },
      cabezote = document.getElementById('top'),
      link =document.getElementById('btn');

btnDepartamentos.addEventListener('mouseover', () =>{
	if(!esDispositivoMovil()){

		grid.classList.add('activo');

	}
	
});


grid.addEventListener('mouseleave' ,() =>{

	if(!esDispositivoMovil()){

		grid.classList.remove('activo');

	}

});

link.addEventListener('mouseover' ,() =>{

	if(!esDispositivoMovil()){

		grid.classList.remove('activo');

	}

});

cabezote.addEventListener('mouseleave' ,() =>{

	if(!esDispositivoMovil()){

		grid.classList.remove('activo');

	}

});




document.querySelectorAll('#menu .categoria a').forEach((elemento) =>{
elemento.addEventListener('mouseenter', (e) => {
document.querySelectorAll('#menu .subcategoria').forEach((categoria) =>{

	categoria.classList.remove('activo');
if(categoria.dataset.categoria == e.target.dataset.categoria){

	categoria.classList.add('activo');

}
});
});
});
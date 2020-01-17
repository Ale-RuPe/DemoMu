$(document).ready(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    ocultarElementos();
});

const ocultarElementos  = ()=> {
    $( "#getDIV" ).hide();
    $( "#getAllDIV" ).hide();
}
/*import * as C from './drawable/Components';
import * as F from './functions';


$(document).ready(function() {
  initComponents();
  initFiltroAlcaldias();
  initFiltroTipoDelito();
  initFiltroTipoArma();
  F.initCluster();
  $('select').formSelect();
});
*/
/**
 * Inicia los componentes de materialize (Barra de nav, Modales, Filtros)
 */
/*
const initComponents = () => {
  
  C.map.zoomControl.setPosition('topright');
  $('.collapsible').collapsible();  
  $('.datepicker').datepicker();
  $('.modal').modal();

  $('#dateFilter_range').click( ()=>{
    $('#modal1').modal('open');
  });

  $('.sidenav').sidenav();

  $('#modal1').modal();

  $(".selectFecha").datepicker({
    format: 'dd/mm/yy'
  });
  $('#fechaIni').val('');
  $('#fechaFin').val('');
};*/



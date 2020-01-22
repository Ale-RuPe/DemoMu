$(document).ready(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    ocultarElementos();

    $('select').formSelect();
});

const ocultarElementos  = ()=> {
  $("#postAccountDIV").hide();
  $("#getAccountsDIV").show();
  $("#getAccountsByIdDIV").hide();
}

document.getElementById('getAccountsRef').onclick = () =>{
  $("#postAccountDIV").hide();
  $("#getAccountsDIV").show();
  $("#getAccountsByIdDIV").hide();
  M.Sidenav.getInstance( $("#slide-out")).close();
};
document.getElementById('getAccountByIdRef').onclick = () =>{
  $("#postAccountDIV").hide();
  $("#getAccountsDIV").hide();
  $("#getAccountsByIdDIV").show();
  M.Sidenav.getInstance( $("#slide-out")).close();
  $('#getAccountsTable').remove();
  $('#getAccountsTableDiv').text("");
};
document.getElementById('postAccountRef').onclick = () =>{
  $("#postAccountDIV").show();
  $("#getAccountsDIV").hide();
  $("#getAccountsByIdDIV").hide();
  M.Sidenav.getInstance( $("#slide-out")).close();
  $('#getAccountsTable').remove();
  $('#getAccountsTableDiv').text("");
};

document.getElementById('postAccountsBtn').onclick= () => {
  const url ='http://localhost:8081/api/contacts';
  const jsonObj = [
    {
      "Name": $('#NamePost').val(),
      "Industry": $('#IndustryPost').val(),
      "Rating": $('#ratingSelect').val(),
      "Active_c": $('#activeSelect').val(),
      "Type": $('#TypePost').val()
    }
  ];
  //console.log(jsonObj);
  //Falta hacer el Post
  
  //Preparamos la petición Ajax
  let request = $.ajax({
    "url": "http://localhost:8081/api/contacts",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify(jsonObj),
  });
  //Este bloque se ejecutará si no hay error en la petición
  request.done(function (response) {
    console.log(response);
    alert("Registro creado con éxito");
  });
  //Este bloque se ejecuta si hay un error
  request.fail(function(jqXHR, textStatus) {
      alert("Hubo un error: " + textStatus);
      console.log(jqXHR);
      console.log(textStatus);
  });
  
};
document.getElementById('getAccountByIdBtn').onclick = () => {
  const id = $('#idAccount').val();
  const url = 'http://localhost:8081/api/contacts/' + id;

  $.getJSON( url, function( data ) {
    $('#getAccountByIdTableDiv').text("");
    let tabla = "<table id='getAccountByIsTable' style='width:100%'>"+
	            "<thead><tr><th>#</th><th>Id</th><th>Name</th>"+
	            "<th>Industry</th>"+"<th>Type</th>"+"<th>Active</th>"+"</tr></thead>"+
              "<tbody>";

    $.each( data, function( num, val ) {
      const number = num;
      const id= val.Id;
      const name = val.Name;
      const industry = val.Industry;
      const type = val.Type;
      const active = val.Active__c;
      tabla+= "<tr><td>"+number+"</td>"+
        "<td>"+id+"</td>"+
        "<td>"+name+"</td>"+
        "<td>"+industry+"</td>"+
        "<td>"+type+"</td>"+
        "<td>"+active+"</td>"+
      "</tr>"
    });
    tabla+="</tbody></table>";
    $('#getAccountByIdTableDiv').append(tabla);
  });
};

document.getElementById('getAccountsBtn').onclick = () => {
  const url = 'http://localhost:8081/api/contacts';
  $.getJSON( url, function( data ) {
    //console.log(data);
    $('#getAccountsTableDiv').text("");
    let tabla = "<table id='getAccountsTable' style='width:100%'>"+
	            "<thead><tr><th>#</th><th>Id</th><th>Name</th>"+
	            "<th>Industry</th>"+"<th>Type</th>"+"<th>Active</th>"+"</tr></thead>"+
              "<tbody>";

    $.each( data, function( num, val ) {
      const number = num;
      const id= val.Id;
      const name = val.Name;
      const industry = val.Industry;
      const type = val.Type;
      const active = val.Active__c;
      tabla+= "<tr><td>"+number+"</td>"+
        "<td>"+id+"</td>"+
        "<td>"+name+"</td>"+
        "<td>"+industry+"</td>"+
        "<td>"+type+"</td>"+
        "<td>"+active+"</td>"+
      "</tr>"
    });
    tabla+="</tbody></table>";
    $('#getAccountsTableDiv').append(tabla);
    $('#getAccountsTable').DataTable();

    /*
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
    */
  });
    
};








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



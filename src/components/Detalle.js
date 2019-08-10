import React from 'react';

const Detalle = ({monitor,refrescar}) => {
  
    if(monitor){
        return (   
            <div class="card text-center" >
             <div class="card-header">
             <h3 class="card-title">Detalle monitor con ID: {monitor.monitorId}</h3>
            </div>
            <div class="card-body">
                
                <h6><b>ciudad:</b> {monitor.city}</h6>
                <h6><b>dirreción:</b> {monitor.address}</h6>
                <h6><b>Lugar: </b>{monitor.place}</h6>
                <h6><b>Localización-latitud:</b> {monitor.location.latitud}</h6>
                <h6><b>Localización-longitud:</b>{monitor.location.longitud}</h6>
                <button onClick={refrescar} class="btn btn-primary mt-4">Regresar</button>
            </div>
            </div>
        )
    } else{
        return(
        <div>
          
        </div>
        )
    } 
  
  };

export default Detalle
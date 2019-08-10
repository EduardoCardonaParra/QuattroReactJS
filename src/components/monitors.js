import React from 'react';

    const Monitors = ({ monitors,onMonitorSelect}) => {
      if(monitors.length>1){
      return (
        <div>
        <table class="table table-hover table-bordered table-sm">
        <thead class="thead-dark">
          <tr>
         
            <th scope="col">ID</th>
            <th scope="col">CIUDAD</th>
            <th scope="col">DIRECCIÓN</th>
          </tr>
        </thead>
        <tbody>
          
          {monitors.map((monitor) => (
           <tr bgcolor={monitor.color} onClick={() => onMonitorSelect(monitor)}>    
              <td >{monitor.monitorId}</td>
              <td>{monitor.city}</td>
              <td>{monitor.address}</td>
            </tr>
      
          ))}
                </tbody>
    </table>
        </div>
          
      )}
      else{
        return(<div></div>);
      }
    };

   
    export default Monitors
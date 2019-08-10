import React, {Component} from 'react';
import Monitors from './components/monitors';
import Detalle from './components/Detalle';



class App extends Component {
  

  constructor(){
    super();
    this.state = {
      monitors: [],
      selectedMonitor:null
      
  };

  }
  onSubmit = () => {
    console.log("click")
  }

  tabla() {
    this.setState({ monitors:[],selectedMonitor:null })
    fetch('https://api.ivanonline.org/v1/air/data')
            .then(res =>res.json())
            .then((moni) => {
             
              
              moni.data.data.forEach(screen => {
                var col;
                if(!screen.caql.current){
                  console.log("Color null");
                  col='';
                }else{
                  col=screen.caql.current.color;
                }
                let data= {
                  monitorId:screen.monitorId,
                  city:screen.city,
                  address:screen.address,
                  place: screen.place,
                  location:{latitud:screen.location.latitude, longitud:screen.location.longitude},
                  color:col
                }
                this.setState({ monitors: this.state.monitors.concat([data]),selectedMonitor:null })
              });
            })
            .catch(console.log)
  }

    componentDidMount() {
        this.tabla();
        this.interval = setInterval(() => {
          // asigno para que se repita cada 5 minutos
          this.tabla();
        }, 300000);
    }

    regresar=() =>{
      
      this.tabla();
    }

    onMonitorSelect =(seleccionado) =>{
      this.state.selectedMonitor=seleccionado;
      this.setState({monitors:[],selectedMonitor:this.state.selectedMonitor})
    }

    render() {
      return (
           
        <div class="container">
          <center><h1>monitores</h1></center>
          <Detalle monitor={this.state.selectedMonitor} key={this.state.selectedMonitor} refrescar={this.regresar}/>                    
          <Monitors monitors={this.state.monitors} onMonitorSelect={this.onMonitorSelect} />
          <footer class=" footer bg-dark rounded-top text-center">
         <div class="container py-2">
        <p class="text-white my-2">
           Autor: Eduardo Cardona
         </p>
        </div>
       </footer>
        </div>
       
      )
  }

}

export default (App);
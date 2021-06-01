import React, { Component} from 'react';
import api from './api';



class App extends Component {
  state  = {
    listas:[],
  }

  async componentDidMount(){
    const response = await api.get('');

    this.setState({
      listas: response.data
    });
  }
  
  render(){
    const {listas}=this.state;  
    
    return(
          <div class="box box-warning box-solid">
              <div class="box-header with-border margin-bottom">
                  <h3 class="box-title">Listagem de países</h3>
              </div>
              <div class="box-body">
                  <div class="row">
                      <div class="col-lg-12 col-xs-12">
                      <table class="table dataTable table-hover table-striped table-condensed table-responsive" id="dataTable">
                              <thead>
                                  <tr>
                                      <th>Id</th>
                                      <th>Nome</th>
                                      <th>Capital</th>
                                      <th></th>
                                  </tr>
                              </thead>
                              {listas.map(lista =>(
                                
                                  <tbody>
                                      <tr>
                                        <td key={lista.id}>{lista.alpha2Code}</td>
                                        <td>{lista.name}</td>
                                        <td>{lista.capital}</td>
                                      </tr>
                                  </tbody>
                                 ))}
                        </table>
                      </div>
                  </div>
              </div>
            </div>
          );
    };          
};

export default App;

import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      addText: '',
      selectedBuilding: 0,
      list: []
    };
  }

  filterUpdate(value) {
      this.setState({
          filterText: value
      })
      //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate(id) {
      this.setState({
          selectedBuilding: id
      })
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

    deleteBuilding(id) {
      const temp = this.state.list
      temp.push(id);
      this.setState( {
          list: temp
      })
        delete this.props.data['']
    }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <AddBuilding

        />
        <Search
            filterText = {this.state.filterText}
            filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    deleteBuilding = {this.deleteBuilding.bind(this)}
                    list = {this.state.list}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                  data = {this.props.data}
                  selectedBuilding = {this.state.selectedBuilding}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;

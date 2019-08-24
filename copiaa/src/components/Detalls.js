import React, {Component} from 'react'
const axios = require('axios');

export default class Detalls extends Component {
  state = {
    docs: []
  }
  componentDidMount() {
    axios.get('http://localhost:7000/api/v1.0/laboratorio').then((response) => {
      this.setState({docs: response.data})
      console.log(this.state.docs)
    })

  }
  render() {
    return (
      <div id = "mainContent" >
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Labs grafic</h5>
              <div className="card-body">
                <div className="p-9 mb-2 masonry-item.col-md-12"></div>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
     </div>
   </div>
    )
  }
}

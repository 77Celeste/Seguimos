import React, { Component } from 'react'

export default class BuscarCuestions extends Component {
  render() {
    return (
        <div className="cr-page px-3">
          <div className="cr-page_header"></div>
          <div className="row">
            <div className="col">
              <div className="mb-3 card">
                <div className="card-header">grafica</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="card card-body">
                        <table className="table table-hover"></table>
                      </div>
                    </div>
                    <div className="col">
                        <div className="card card-body">
                           <h6>grafica</h6>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3 card">
                <div className="card-header">tablas</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="card card-body">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>cero name</th>
                              <th>cero1 name</th>
                              <th>cero2 name</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">ddddd</th>
                              <td>jacovini</td>
                              <td>jacovini</td>
                            </tr>
                            <tr>
                              <th scope="row">ddddd</th>
                              <td>jacovini</td>
                              <td>jacovini</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
      )
  }
}

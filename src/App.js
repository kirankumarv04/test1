import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <section class="page1">
        <div class="row">
          <div class="col-md-3">
            <div class="side-bar1">
              <h3>Cloud Connect</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>

          <div class="col-md-9">
            <div class="row num">
              <div class="col-md-4">
                <h4 class="head-bg">1</h4>
                <hr class="border03"/>
                <h5 class="sub-head2">Configure</h5>
              </div>

              <div class="col-md-4">
                <h4>2</h4>
                <hr class="border03"/>
                <h5 class="sub-head2">Print Profile</h5>
              </div>

              <div class="col-md-4">
                <h4>3</h4>
                <h5 class="sub-head2">Import Details</h5>
              </div>

              <div class="col-md-12 icon">
                <i class="fas fa-plug"></i>
              </div>
            </div>
            <h4 class="sub-head1">Click Configure</h4>
            <div class="curve"></div>

            <button class="btn btn-success">Configure <i class="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </section>

      <section class="page1">
        <div class="row">
          <div class="col-md-3">
            <div class="side-bar1">
              <h3>Cloud Connect</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>

          <div class="col-md-9">
            <div class="row num">
              <div class="col-md-4">
                <h4 class="head-bg">1</h4>
                <hr class="border03"/>
                <h5 class="sub-head2">Configure</h5>
              </div>

              <div class="col-md-4">
                <h4>2</h4>
                <hr class="border03"/>
                <h5 class="sub-head2">Print Profile</h5>
              </div>

              <div class="col-md-4">
                <h4>3</h4>
                <h5 class="sub-head2">Import Details</h5>
              </div>

              <div class="col-md-12">
                <h3 class="percent">50%</h3>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <span class="sr-only">50% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <h4 class="sub-head1">Connecting to Cloud EFI IQ</h4>
          </div>
        </div>
      </section>

      <section class="page3">
        <div class="row">
          <div class="col-md-3">
            <div class="side-bar3">
              <h3>Printshop Profilet</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>

          <div class="col-md-9">
            <div class="row num">
              <div class="col-md-4">
                <h4 class="head-bg1"><i class="fa fa-check"></i></h4>
                <hr class="border03"/>
                <h5 class="sub-head2">Configure</h5>
              </div>

              <div class="col-md-4">
                <h4 class="head-bg">2</h4>
                <hr class="border03"/>
                <h5 class="sub-head2">Print Profile</h5>
              </div>

              <div class="col-md-4">
                <h4>3</h4>
                <h5 class="sub-head2">Import Details</h5>
              </div>

              <div class="col-md-12">
                <div class="row form">
                  <div class="col-md-6">
                    <form>
                      <label> Name</label>
                      <input type="text" name="name" class="form-control" placeholder="Name" required/>

                      <label> Email</label>
                      <input type="email" name="email" class="form-control" placeholder="Email" required/>

                      <label> Address</label>
                      <input type="text" name="address1" class="form-control" placeholder="address1"/><br/>
                      <input type="text" name="address2" class="form-control" placeholder="address2"/>
                    </form>
                  </div>

                  <div class="col-md-6">
                    <form>
                      <label> Upload File</label>
                      <input type="file" name="fle" class="form-control temp" placeholder="File"/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-success btn1">Next <i class="fa fa-arrow-right"></i></button>
          </div>
        </div>
      </section>

      <section class="page4">
        <div class="row">
          <div class="col-md-3">
            <div class="side-bar4">
              <h3>Printshop Profilet</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>

          <div class="col-md-9">
            <div class="row num">
              <div class="col-md-4">
                <h4 class="head-bg1"><i class="fa fa-check"></i></h4>
                <hr class="border03"/>
                <h5 class="sub-head2">Configure</h5>
              </div>

              <div class="col-md-4">
                <h4 class="head-bg1"><i class="fa fa-check"></i></h4>
                <hr class="border03"/>
                <h5 class="sub-head2">Print Profile</h5>
              </div>

              <div class="col-md-4">
                <h4 class="head-bg">3</h4>
                <h5 class="sub-head2">Import Details</h5>
              </div>

              <div class="col-md-12">
                <div class="row form">
                  <div class="col-md-4">
                    <i class="fa fa-user text-icon"></i>
                    <div class="text-box">
                      <h5>Customers</h5>
                      <p>Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum </p>
                      <a href="#">Download Excel Template</a>
                      <button class="btn btn-warning">Upload</button>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <i class="fa fa-users text-icon1"></i>
                    <div class="text-box">
                      <h5>Products</h5>
                      <p>Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum </p>
                      <a href="#">Download Excel Template</a>
                      <button class="btn btn-warning">Upload</button>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <i class="fa fa-list text-icon2"></i>
                    <div class="text-box">
                      <h5>Price List</h5>
                      <p>Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum </p>
                      <a href="#">Download Excel Template</a>
                      <button class="btn btn-warning">Upload</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-success btn1">Done</button>
          </div>
        </div>
      </section>
    </div>

  );
}

export default App;

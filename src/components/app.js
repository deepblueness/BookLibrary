import React, { Component } from 'react';
import BookList from '../containers/book_list'
import BookDetail from '../containers/book_detail'
import MarkedList from '../containers/book_marked'
import AddForm from '../containers/add_book'


export default class App extends Component {
  render() {
    return (
      <div> 
          <body style={{height:1500+"px"}}>
            <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header" className="navbar-brand"> My Library
                </div>  
                  <AddForm/>
                </div>
            </nav>
        
              
            <div className="container-fluid" style={{marginTop:50+"px"}}>
                <div className="row">
                  <div className="col-sm-4">
                  <h3>Book List</h3>
                  
                    <BookList/>
                    
                </div>
                <div className="col-sm-4">
                    <h3>Book Detail</h3>
                    <BookDetail/>
                </div>
                <div className="col-sm-4">
                      <h3>Favourites</h3> 
                      <MarkedList/>
                </div>
                
              
              </div>  
          
            </div>
          </body>
        </div>
        
        
    );
  }
}

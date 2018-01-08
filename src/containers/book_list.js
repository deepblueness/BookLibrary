import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {markBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
                return (
                   
                        <li key = {book.id }
                            
                            className="list-group-item"
                            onClick={() => { this.props.selectBook(book)} }>
                            {book.title}
                            <button  
                                className = "btn btn-default" className=" glyphicon glyphicon-star" 
                                onClick={() => { this.props.markBook(book)} }
                                > 
                            </button> 
                        </li>
                     
                       
                   
                )
            })
            
    }
   
    render() {
        return (
              <ul className="list-group" >
                    {this.renderList()}
                </ul>
                
            
        )

    }
}


function mapStateToProps(state) {
    // whatever gets retured is 'props' inside book list
    return {books: state.books}
}
// anything returned end sup as props for Booklist container

function mapDispatchToProps(dispatch) {
    //whenever select book is called the result is passed to reducers
    return bindActionCreators({
        selectBook: selectBook, 
        markBook: markBook,
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList)
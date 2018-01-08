import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {markBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class MarkedList extends Component {
    renderList() {
        if (!this.props.markedBook) { <div> Mark books </div>}
        return this.props.markedBook.map((book) => {
                return (
                    <span key={book.title}>
                    <li
                        className="list-group-item">
                        {book.title}
                    </li>
                    </span>
                )
            })
    }
    render() {
        return (
            
               
            <ul className="list-group">
            
                {this.renderList()}
            </ul>
           
        )

    }
}

function mapStateToProps(state) {
    
    return {markedBook: state.markedBook}
}


export default connect(mapStateToProps)(MarkedList)
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBook} from '../actions/index'
import {bindActionCreators} from 'redux';

let input1
let input2

class AddForm extends Component {
    render() {
        return (
            <form
                className="navbar-form navbar-left"
                onSubmit={e => {
                e.preventDefault()
                this.props.addBook(input1.value, input2.value)
                input1.value = '' 
                input2.value = ''
            }}>
                <div className="form-group">
                    <input
                        ref={node => {
                        input1 = node
                    }}
                        placeholder="Book Title"
                        className="form-control"/>
                    <input
                        ref={node => {
                        input2 = node
                    }}
                        placeholder="Nr of Pages"
                        className="form-control pages"
                        />
                    <button
                        type="submit"
                        className=" btn btn-default glyphicon glyphicon-plus add "
                        ></button>
                </div>
            </form>

        )
    }
}

function mapStateToProps(state) {
    return {books: state.books}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addBook: addBook
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
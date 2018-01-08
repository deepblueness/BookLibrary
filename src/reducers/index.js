import { combineReducers, createStore } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'
import MarkedBook from './reducer_marked_book'


const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  markedBook: MarkedBook
});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default rootReducer;

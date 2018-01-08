export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
export function markBook(book) {
    return {
        type: 'BOOK_MARKED',
        payload: book
    }
}
let nextBookId = 7;

export function addBook(title, pages)  {
    return {
      type: 'BOOK_ADDED',
      id: nextBookId++,
      title: title,
      pages: pages
    }
  }

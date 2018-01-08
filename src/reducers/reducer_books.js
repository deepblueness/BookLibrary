const initialState = [
    {id:1, title: "Javascript", pages: 101},
    {id:2, title: "Stranger in the night", pages: 34},
    {id:3, title: "Indiana Jones: Package from hell", pages: 405},
    {id:4, title: "Crapfuk: A Romantic story", pages: 344},
    {id:5, title: "In your trujas", pages: 23},
    {id:6, title: "In your trujas 2", pages: 128}
    
]

export default function(state = initialState, action ) {
    switch (action.type) {
        case 'BOOK_ADDED':
        return [
            ...state,
            {
              id: action.id,
              title: action.title,
              pages: action.pages
            }
    
            ]
        }
        return state
}
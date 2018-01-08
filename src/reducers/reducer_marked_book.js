export default function (state = [], action) {

    switch (action.type) {
        case 'BOOK_MARKED':
            return state.concat(action.payload)
    }
    return state
}
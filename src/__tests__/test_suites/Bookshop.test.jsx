import React from "react"
import {render} from "@testing-library/react"
import App from '../../App'
import '@testing-library/jest-dom'

describe('Our app will', ()=> {
    test('books in the bookshop', async ()=> {
        global.setFetchResponse(global.bookshop)
    let { findAllByTestId } = render(<App />);
    const books = await findAllByTestId('book-item');
    expect(books).toHaveLength(global.bookshop.length);
    const booksNames = books.map((book) => book.querySelector('h4').textContent);
    
    })
})
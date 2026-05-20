import {afterEach} from "vitest"
import {cleanup} from "@testing-library/react"
import '@testing-library/jest-dom/vitest'
import fetch from 'nodefetch'

global.fetch =fetch 

global.bookshop = [
     {
      "id": 101,
      "author": "Leo Tolstoy",
      "title": "War and Peace",
      "published": 1869,
      "price": 19.99,
      "inStock": true
    },
    {
      "id": 102,
      "author": "Leo Tolstoy",
      "title": "The Kingdom of God Is Within You",
      "published": 1894,
      "price": 13.99,
      "inStock": true
    },
    {
      "id": 103,
      "author": "Leo Tolstoy",
      "title": "What I Believe",
      "published": 1885,
      "price": 11.99,
      "inStock": true
    },
    {
      "id": 201,
      "author": "Mahatma Gandhi",
      "title": "The Story of My Experiments with Truth",
      "published": 1927,
      "price": 14.99,
      "inStock": true
    },
    {
      "id": 202,
      "author": "Mahatma Gandhi",
      "title": "Hind Swaraj",
      "published": 1909,
      "price": 11.99,
      "inStock": true
    },
    {
      "id": 203,
      "author": "Mahatma Gandhi",
      "title": "Satyagraha in South Africa",
      "published": 1928,
      "price": 12.99,
      "inStock": true
    },
    {
      "id": 301,
      "author": "Nelson Mandela",
      "title": "Long Walk to Freedom",
      "published": 1994,
      "price": 18.99,
      "inStock": true
    },
    {
      "id": 302,
      "author": "Nelson Mandela",
      "title": "Conversations with Myself",
      "published": 2010,
      "price": 16.49,
      "inStock": true
    },
    {
      "id": 401,
      "author": "Martin Luther King Jr.",
      "title": "Stride Toward Freedom",
      "published": 1958,
      "price": 15.49,
      "inStock": true
    },
    {
      "id": 402,
      "author": "Martin Luther King Jr.",
      "title": "Why We Can't Wait",
      "published": 1964,
      "price": 13.49,
      "inStock": true
    }
]

global.setFetchResponse= (val) => {
    global.fetch = vi.fn(()=> {
        Promise.resolve ({
            json: () =>
        Promise.resolve(val),
            ok: true,
            status: 200
        })
    })
}
afterEach(() => {
    cleanup()
})
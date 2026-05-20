import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';
import '@testing-library/jest-dom';

describe('Our App will', () => {
    test('create, read, update and delete book records', async () => {
        global.setFetchResponse(global.books)
        const { findAllByTestId } = render(<App />)
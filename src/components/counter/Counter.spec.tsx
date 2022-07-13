import React from 'react'
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import user from '@testing-library/user-event'

import Counter from './Counter'

describe('Counter', () => {
    describe('Initialized with defaultCount=10 and description="WWW"', () => {
        beforeEach(() => {
            render(<Counter defaultCount={10} description='WWW' />)
        })

        it('renders "Current Count: 10"', () => {
            expect(screen.getByText('Current count: 10')).toBeInTheDocument()
        })

        it('renders title as "WWW"', () => {
            expect(screen.getByText(/www/i)).toBeInTheDocument()
        })

        describe('when the incrementor changes to 5 and "+" button is clicked', () => {
            beforeEach(async () => {
                user.type(screen.getByLabelText(/incrementor/i), '{selectall}5')
                user.click(screen.getByRole('button', { name: 'increment' }))
                await waitFor(() => screen.getByText('Current Count: 15'))
            })

            it('renders "Current Count: 15"', () => {
                expect(screen.getByText('Current count: 15')).toBeInTheDocument()
                // Failing..
            })

            it('renders to big, and will disappear after 300ms', async () => {
                await waitForElementToBeRemoved(() => screen.queryByText('I am to small'))
                // Failing..
            })
        })

        describe('when the incrementor changes to empty string and "+" button is clicked', () => {
            beforeEach(async () => {
                user.type(screen.getByLabelText(/Incrementor/), '{selectall}{delete}')
                user.click(screen.getByRole('button', { name: 'increment' }))
                await waitFor(() => screen.getByText('Current Count: 16'))
            })

            it('renders "Current Count: 16"', () => {
                expect(screen.getByText('Current Count: 16')).toBeInTheDocument()
                // Failing..
            })
        })

        describe('when the incrementor changes to 25 and "-" button is clicked', () => {
            beforeEach(() => {
                user.type(screen.getByLabelText(/incrementor/i), '{selectall}25')
                user.click(screen.getByRole('button', { name: 'decrement' }))
            })

            it('renders "Current Count: -15"', async () => {
                expect(screen.getByText('Current count: -15')).toBeInTheDocument()
                // Failing..
            })
        })
    })

    describe('Initialized with defaultCount=0 and description="My Counter"', () => {
        beforeEach(() => {
            render(<Counter defaultCount={0} description='My Counter' />)
        })

        it('renders "Current Count: 0"', () => {
            expect(screen.getByText('Current count: 0')).toBeInTheDocument()
        })

        it('renders title as "MyCounter"', () => {
            expect(screen.getByText(/my counter/i)).toBeInTheDocument()
        })

        describe('When + is clicked', () => {
            beforeEach(async () => {
                await user.click(screen.getByRole('button', { name: 'increment' }))
            })

            it('renders "Current Count: 1"', () => {
                expect(screen.getByText('Current count: 1')).toBeInTheDocument()
            })
        })

        describe('When - is clicked', () => {
            beforeEach(() => {
                user.click(screen.getByRole('button', { name: 'decrement' }))
            })

            it('renders "Current Count: -1"', async () => {
                await waitFor(() => expect(screen.getByText('Current count: -1')).toBeInTheDocument())
            })
        })
    })
})
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
                // await user.type(screen.getByLabelText(/incrementor/i), '{selectall}5') // not working, its not selecting the 1
                const input = screen.getByLabelText(/incrementor/i)
                await user.clear(input)
                expect(input).toBe('')
                await user.click(screen.getByRole('button', { name: 'increment' })) //works
                // await waitFor(() => screen.getByText('Current Count: 15'))
            })

            fit('renders "Current Count: 15"', () => {
                expect(screen.getByText('Current count: 15')).toBeInTheDocument()
                // Failing..
                // if I changing the incrementor to 0, it
            })
        })

        describe('when the incrementor changes to empty string and "+" button is clicked', () => {
            beforeEach(async () => {
                await user.type(screen.getByLabelText(/Incrementor/), '{selectall}{delete}')
                await user.click(screen.getByRole('button', { name: 'increment' }))
                await waitFor(() => screen.getByText('Current Count: 16'))
            })

            it('renders "Current Count: 16"', () => {
                expect(screen.getByText('Current Count: 16')).toBeInTheDocument()
                // Failing..
            })
        })

        describe('when the incrementor changes to 25 and "-" button is clicked', () => {
            beforeEach(async () => {
                await user.type(screen.getByLabelText(/incrementor/i), '{selectall}25')
                await user.click(screen.getByRole('button', { name: 'decrement' }))
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
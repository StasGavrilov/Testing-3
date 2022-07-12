import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Counter from './Counter'

describe('Counter', () => {
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
            beforeEach(() => {
                fireEvent.click(screen.getByRole('button', { name: 'increment' }))
            })

            it('renders "Current Count: 1"', () => {
                expect(screen.getByText('Current count: 1')).toBeInTheDocument()
            })
        })

        describe('When - is clicked', () => {
            beforeEach(() => {
                fireEvent.click(screen.getByRole('button', { name: 'decrement' }))
            })

            it('renders "Current Count: -1"', () => {
                expect(screen.getByText('Current count: -1')).toBeInTheDocument()
            })
        })
    })
})
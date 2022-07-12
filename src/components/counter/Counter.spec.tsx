import React from 'react'
import { render, screen } from '@testing-library/react'


import Counter from './Counter'

it('defaultCount = 0, then counter = 1', () => {
    render(<Counter defaultCount={0} description='My Counter' />)
})

it.todo('defaultCount = 0, and - clicked then counter = -1')
it.todo('defaultCount = 0, and + clicked then counter = 1')
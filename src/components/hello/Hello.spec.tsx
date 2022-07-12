import Hello from "./Hello"
import { render, screen } from '@testing-library/react'

it('render hello world', () => {
    render(<Hello />)
    const myEl = screen.getByText('Hello World!')
    expect(myEl).toBeInTheDocument()
})
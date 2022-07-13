import { render, screen } from '@testing-library/react'
import { MyDrawer } from '../example3/Drawer'
import { createMock } from 'ts-jest-mock'
import { Example4 } from './Example4'

jest.mock('../Example3/Drawer')
createMock(MyDrawer).mockImplementation(() => <div>mocked: drawer</div>)

describe('Example4', () => {
  it('renders MyDrawer', () => {
    render(<Example4 />)
    expect(screen.queryByText('Hello Drawer Component!')).not.toBeInTheDocument()
    expect(screen.getByText('mocked: drawer')).toBeInTheDocument()
  })
})

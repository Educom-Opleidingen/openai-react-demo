import React from 'react'
import { render, screen } from '@testing-library/react'

import { Error } from './Error.stories'

const testID = 'Error-' + Math.floor(Math.random() * 90000) + 10000
const err = { id: '10', message: 'Error 429' }
describe('Error', () => {
  it('Can render Error', () => {
    render(<Error testID={testID} error={err} />)
    let defaultCreated = screen.getByTestId(testID)
    expect(defaultCreated).not.toBeNull()
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'


import { Spinner } from './Spinner.stories'

const testID = 'Spinner-' + Math.floor(Math.random() * 90000) + 10000

describe('Spinner', () => {
  it('Can render Spinner', () => {
    render(<Spinner testID={testID} />)
    let defaultCreated = screen.getByTestId(testID)
    expect(defaultCreated).not.toBeNull()
  })
})

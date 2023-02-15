import React from 'react'
import { render, screen } from '@testing-library/react'

import { Form } from './Form.stories'

const testID = 'Form-' + Math.floor(Math.random() * 90000) + 10000

describe('Form', () => {
  it('Can render Form', () => {
    render(<Form testID={testID} />)
    let defaultCreated = screen.getByTestId(testID)
    expect(defaultCreated).not.toBeNull()
  })
})

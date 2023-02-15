import React from 'react'
import { render, screen } from '@testing-library/react'

import { DefaultParagraph } from './Paragraph.stories'

const testID = 'Paragraph-' + Math.floor(Math.random() * 90000) + 10000

describe('Paragraph', () => {
  it('Can render Paragraph', () => {
    render(<DefaultParagraph testID={testID} />)
    let defaultCreated = screen.getByTestId(testID)
    expect(defaultCreated).not.toBeNull()
  })
})

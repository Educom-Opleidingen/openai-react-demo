import React from 'react'
import { render, screen } from '@testing-library/react'
import { defaults } from '../../../config'
import { Image } from './Image.stories'

const testID = 'Image-' + Math.floor(Math.random() * 90000) + 10000

describe('Image', () => {
  it('Can render Image', () => {
    render(<Image testID={testID} image={defaults.image} />)
    let defaultCreated = screen.getByTestId(testID)
    expect(defaultCreated).not.toBeNull()
  })
})

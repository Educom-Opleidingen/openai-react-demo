import React from 'react'
import { render, screen } from '@testing-library/react'
import { defaults } from '../../../config'

import { Image, Text } from './Button.stories'

const testID = 'Button-' + Math.floor(Math.random() * 90000) + 10000

describe('Button', () => {
  it('Can render Image Button', () => {
    render(
      <Image
        testID={testID}
        text={'Image'}
        action={defaults.action}
        type={defaults.types.image}
      />
    )
    let defaultCreated = screen.getByTestId(testID)
    expect(defaultCreated).not.toBeNull()
  })

  it('Can render Text Button', () => {
    render(
      <Text
        testID={testID}
        text={'Text'}
        action={defaults.action}
        type={defaults.types.text}
      />
    )
    let defaultCreated = screen.getByTestId(testID)
    expect(defaultCreated).not.toBeNull()
  })
})

import React from 'react'
import ButtonSrc from './Button'

import { defaults } from '../../../config'

const ButtonMeta = {
  title: 'atoms/Buttons',
  component: ButtonSrc,
  argTypes: {
    testID: { table: { disable: true } },
    type: { name: 'Type' },
    text: { name: 'Button Text' },
    action: { name: 'Function' }
  }
}

const testID = 'Button-' + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ButtonSrc {...args} />

export const Image = Template.bind({})
Image.args = {
  testID: testID,
  type: defaults.types.image,
  text: defaults.buttonText.image,
  action: defaults.action
}

export const Text = Template.bind({})
Text.args = {
  testID: testID,
  type: defaults.types.text,
  text: defaults.buttonText.text,
  action: defaults.action
}


export default ButtonMeta

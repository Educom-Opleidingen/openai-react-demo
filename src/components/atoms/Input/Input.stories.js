import React from 'react'
import InputSrc from './Input'
import {defaults} from "../../../config";

const InputMeta = {
  title: 'atoms',
  component: InputSrc,
  argTypes: {
    testID: { table: { disable: true } },
    handler: { name: 'Change Handler' },
  }
}

const testID = 'Input-' + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <InputSrc {...args} />

export const Input = Template.bind({})
Input.args = {
  testID: testID,
  handler: defaults.action()
}

export default InputMeta

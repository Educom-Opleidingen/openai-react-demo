import React from 'react'
import ErrorSrc from './Error'
import { defaults } from '../../../config'

const ErrorMeta = {
  title: 'atoms/Error',
  component: ErrorSrc,
  argTypes: {
    testID: { table: { disable: true } },
    error: { name: 'Error' }
  }
}

const testID = 'Error-' + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ErrorSrc {...args} />

export const Error = Template.bind({})
Error.args = {
  testID: testID,
  error: defaults.error
}

export default ErrorMeta

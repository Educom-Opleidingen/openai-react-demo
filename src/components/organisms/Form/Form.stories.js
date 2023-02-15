import React from 'react'
import FormSrc from './Form'

const FormMeta = {
  title: 'organisms/Form',
  component: FormSrc,
  argTypes: {
    testID: { table: { disable: true } },
  }
}

const testID = 'Form-' + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <FormSrc {...args} />

export const Form = Template.bind({})
Form.args = {
  testID: testID,
}

export default FormMeta

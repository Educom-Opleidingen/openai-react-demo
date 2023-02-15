import React from 'react'
import SpinnerSrc from './Spinner'

const SpinnerMeta = {
  title: 'atoms/Spinner',
  component: SpinnerSrc,
  argTypes: {
    testID: { table: { disable: true } },
  }
}

const testID = 'Spinner-' + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <SpinnerSrc {...args} />

export const Spinner = Template.bind({})
Spinner.args = {
  testID: testID,
}

export default SpinnerMeta

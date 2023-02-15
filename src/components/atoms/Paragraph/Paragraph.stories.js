import React from 'react'
import ParagraphSrc from './Paragraph'
import { defaults} from "../../../config";

const ParagraphMeta = {
  title: 'atoms',
  component: ParagraphSrc,
  argTypes: {
    testID: { table: { disable: true } },
    text: { name: 'Content' }
  }
}

const testID = 'Paragraph-' + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ParagraphSrc {...args} />

export const Paragraph = Template.bind({})
Paragraph.args = {
  testID: testID,
  text: defaults.paragraph
}

export default ParagraphMeta

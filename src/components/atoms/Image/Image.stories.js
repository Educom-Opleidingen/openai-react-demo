import React from 'react'
import ImageSrc from './Image'
import { defaults } from '../../../config'

const ImageMeta = {
  title: 'atoms/Image',
  component: ImageSrc,
  argTypes: {
    testID: { table: { disable: true } },
    image: { name: 'Image URL' }
  }
}

const testID = 'Image-' + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ImageSrc {...args} />

export const Image = Template.bind({})
Image.args = {
  testID: testID,
  image: defaults.image
}

export default ImageMeta

import PropTypes from 'prop-types'
const Image = ({ testID, image }) => {
  return (
    <div data-testid={testID} className={`Image`}>
      <img src={image} alt={'generated'} />
    </div>
  )
}

Image.propTypes = {
  testID: PropTypes.string,
  image: PropTypes.string
}

export default Image

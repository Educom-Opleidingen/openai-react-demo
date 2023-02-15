import PropTypes from 'prop-types'

const Paragraph = ({ testID, text }) => {
  return (
    <div data-testid={testID} className={`Paragraph`}>
      <p>{text}</p>
    </div>
  )
}

Paragraph.propTypes = {
  testID: PropTypes.string,
  text: PropTypes.string
}

export default Paragraph

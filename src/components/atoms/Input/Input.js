import PropTypes from 'prop-types'
import { config } from '../../../config'
const Input = ({ testID, handler }) => {
  const inputHandler = (value) => {
    handler(value)
  }

  return (
    <div data-testid={testID} className={`Input`}>
      <input
        type={'text'}
        placeholder={config.prompt}
        onChange={(e) => inputHandler(e.target.value)}
      />
    </div>
  )
}

Input.propTypes = {
  testID: PropTypes.string,
  handler: PropTypes.func
}

export default Input

import PropTypes from 'prop-types'
import { config } from '../../../config'

const Button = ({ testID, text, type, action }) => {
  const handler = () => {
    action(type)
  }

  return (
    <div data-testid={testID} className={`Button`} onClick={() => handler()}>
      {text}
    </div>
  )
}

Button.propTypes = {
  testID: PropTypes.string,
  type: PropTypes.oneOf(Object.values(config.types)),
  text: PropTypes.string,
  action: PropTypes.func
}

export default Button

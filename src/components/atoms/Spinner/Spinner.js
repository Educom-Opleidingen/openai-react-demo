import PropTypes from 'prop-types'
import BarLoaded from 'react-spinners/BarLoader'
const Spinner = ({ testID }) => {
  return (
    <div data-testid={testID} className={`Spinner`}>
      <BarLoaded
        loading={true}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}

Spinner.propTypes = {
  testID: PropTypes.string
}

export default Spinner

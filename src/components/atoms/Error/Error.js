import PropTypes from 'prop-types'
const Error = ({ testID, error }) => {

    if(error) {
        return (
            <div data-testid={testID} className={`Error`}>
                <h2>Error</h2>
                <p>{error.message}</p>
            </div>
        )
    }
    return null
}

Error.propTypes = {
  testID: PropTypes.string,
  error: PropTypes.object
}

export default Error

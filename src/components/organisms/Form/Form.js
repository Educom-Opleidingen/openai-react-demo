import { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import Spinner from '../../atoms/Spinner'
import Paragraph from '../../atoms/Paragraph'
import Error from '../../atoms/Error'
import Image from '../../atoms/Image'
import { config } from '../../../config'
import { generateResult } from '../../../lib'

const Form = ({ testID }) => {
  const [prompt, setPrompt] = useState('')
  const [isLoaded, setLoaded] = useState(true)

  const [hasResult, setHasResult] = useState(false)
  const [result, setResult] = useState('')
  const [type, setType] = useState(null)

  const [isError, setHasError] = useState(false)
  const [error, setError] = useState({})

  const inputHandler = (value) => {
    setError({})
    setPrompt(value)
  }

  const executePrompt = async (type) => {
    setLoaded(false)
    setHasResult(false)
    setType(type)
    const [result, error] = await generateResult(type, prompt)

    /// TODO: Dit mag wat strakker. Even nadenken of een reducer hier op z'n plek is...
    if (error) {
      setError(error)
      setHasError(true)
      setLoaded(true)
    } else {
      setResult(result)
      setHasResult(true)
      setError(false)
      setLoaded(true)
    }
  }

  const renderButtonBar = () => {
    if (isLoaded) {
      return (
        <div className='button-bar'>
          <Button
            text={'Text'}
            action={executePrompt}
            type={config.types.text}
          />
          <Button
            text={'Image'}
            action={executePrompt}
            type={config.types.image}
          />
        </div>
      )
    }
    return <Spinner />
  }

  return (
    <div data-testid={testID} className={`Form`}>
      <div>
        <Input handler={inputHandler} />
      </div>
      {renderButtonBar()}
      {(hasResult && type === config.types.image) && <Image image={result} />}
      {(hasResult && type === config.types.text) && <Paragraph text={result} />}
      {isError && <Error error={error} />}
    </div>
  )
}

Form.propTypes = {
  testID: PropTypes.string
}

export default Form

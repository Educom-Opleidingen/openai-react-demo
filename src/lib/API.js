import { Configuration, OpenAIApi } from 'openai'
import { config } from '../config'

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY
})

const openai = new OpenAIApi(configuration)

const generateText = async (prompt) => {
  let result, error
  try {
    const completion = await openai.createCompletion({
      model: config.textModel,
      prompt: prompt,
      max_tokens: config.maxTokens
    })
    result = completion.data.choices[0].text
  } catch (e) {
    error = e
  }
  return [result, error]
}

const generateImage = async (prompt) => {
  let result, error
  try {
    const completion = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: config.resolution
    })
    result = completion.data.data[0].url
  } catch (e) {
    error = e
  }
  return [result, error]
}

const generateResult = async (type, prompt) => {
  if (type === config.types.image) return await generateImage(prompt)
  if (type === config.types.text) return await generateText(prompt)
}

export { generateResult }

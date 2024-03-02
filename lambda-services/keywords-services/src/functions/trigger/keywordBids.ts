import { log } from 'seesignage-sls-utils'

export const main = async event => {
  log('info', `Event: ${JSON.stringify(event)}`)
  try {
    log('info', 'I am being invoked')
  } catch (e) {
    log('error', e)
    return false
  }
}

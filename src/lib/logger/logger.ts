import chalk from 'chalk'
import { Spinner } from 'cli-spinner'

export module Logger {
  export const successHex = chalk.hex('#39A845')
  export const warningHex = chalk.hex('#FFD02E')
  export const errorHex = chalk.hex('#B5332E')
  export const syncHex = chalk.hex('#3073B7')
  export const greyHex = chalk.hex('#BEBDBD')
  export const indigoHex = chalk.hex('#3950A0')
  export const pinkHex = chalk.hex('#D8A1C4')

  export const syncSpinner = async (text: string) => {
    const spinner = new Spinner(chalk.white(text) + ` %s\n`)
    try {
      spinner.setSpinnerString(18)
      spinner.start()
      return spinner
    } catch (error) {
      spinner.stop(true)
      throw new Error(`syncSpinner Error: ${error}`)
    }
  }

  export const normal = (text: string) => {
    console.log(chalk.white(text))
  }

  export const success = (text: string) => {
    console.log(successHex(text))
  }

  export const warning = (text: string) => {
    console.log(warningHex(text))
  }

  export const error = (text: string) => {
    console.log(errorHex(text))
  }

  export const errorString = (text: string) => {
    return errorHex(text)
  }

  export const sync = (text: string) => {
    console.log(syncHex(text))
  }

  export const grey = (text: string) => {
    console.log(greyHex(text))
  }

  export const successCheck = (text: string) => {
    const check = successHex('✔')
    const plainText = chalk.white(text)
    const textLog = `${check} ${plainText} 🎉`
    console.log(textLog)
  }
}

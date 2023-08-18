// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  PasswordValidatorContainer,
  Heading,
  PasswordDescription,
  CustomInput,
  PasswordErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onPassword = event => setPassword(event.target.value)

  return (
    <AppContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <PasswordDescription>
          Check how strong and secure is your password
        </PasswordDescription>
        <CustomInput type="password" value={password} onChange={onPassword} />
        {password.length >= 8 ? null : (
          <PasswordErrorMessage>
            Your password must be at least 8 characters
          </PasswordErrorMessage>
        )}
      </PasswordValidatorContainer>
    </AppContainer>
  )
}

export default PasswordValidator

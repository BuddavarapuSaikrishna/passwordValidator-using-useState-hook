// Style your elements here

import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`

export const PasswordValidatorContainer = styled.div`
  background-color: #475569;
  max-width: 300px;
  padding: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 800px;
  }
`

export const Heading = styled.h1`
  font-weight: bold;
  font-family: Roboto;
  color: #ffffff;
  font-size: 40px;
  margin-bottom: 20px;
`

export const PasswordDescription = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 20px;
`

export const CustomInput = styled.input`

  padding-left:50px
  padding-right:50px;
  padding-top: 10px;
  padding-bottom:10px;
  width:70%;
  margin-top:30px;


`
export const PasswordErrorMessage = styled.p`
  color: red;
  font-size: 18px;
  margin-bottom: 30px;
`

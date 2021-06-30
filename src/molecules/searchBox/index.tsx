import React from 'react'
import { ButtonIndex } from '../../atoms/buttonComponents'
import { InputIndex } from '../../atoms/inputComponents'
import { ISearchBox } from './iSearchBox'

export function SearchBox({
  titleButton,
  titleInput,
  backgroundColorButton,
  backgroundColorInput
}: ISearchBox) {
  return (
    <div>
      <ButtonIndex title={titleButton} background={backgroundColorButton} />
      <InputIndex title={titleInput} background={backgroundColorInput} />
    </div>
  )
}
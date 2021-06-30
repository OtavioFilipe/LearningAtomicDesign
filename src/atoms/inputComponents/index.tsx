import React from 'react'
import { Container } from './styles';
import { InputType } from './i-input';

export function InputIndex({ title, background}: InputType) {
  return (
    <Container placeholder={title} background={background}/>
  )
}
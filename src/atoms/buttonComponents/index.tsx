import React from 'react'
import { Button } from './styles'
import { iButtonProps } from './iButtonProps'

export function ButtonIndex({title, background}: iButtonProps) {
  return (
    <Button background={background}>
     {title} 
    </Button>
  )
}
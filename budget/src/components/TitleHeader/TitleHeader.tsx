import React from 'react'
import { Header } from 'semantic-ui-react'

function TitleHeader({ title }: Readonly<{ title: string }>) {
  return (
    <Header as="h1">
      {title}
    </Header>
  )
}

export default TitleHeader
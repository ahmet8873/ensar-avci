import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const KitapButtons = () => {
  return (
    <div style={{textAlign:'center'}}>
        <Link to={'/'}> <Button>sayfa-1</Button></Link>
        <Link to={'/2'}> <Button>sayfa-2</Button></Link>
        <Link to={'/3'}> <Button>sayfa-3</Button></Link>
        <Link to={'/4'}> <Button>sayfa-4</Button></Link>
        <Link to={'/5'}> <Button>sayfa-5</Button></Link>
        <Link to={'/6'}> <Button>sayfa-6</Button></Link>
        <Link to={'/7'}> <Button>sayfa-7</Button></Link>
    </div>
  )
}

export default KitapButtons
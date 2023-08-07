import React from 'react'
import {Row, Col} from 'react-bootstrap'
import storeitems from '../data/storeitems.json'
import StoreItem from './StoreItem'

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={3} sm={1} lg={4} className='g-3'>
        {storeitems.map((item) => (
          <Col key= {item.id}>
          <StoreItem {...item} />

          </Col>
        )) }
      </Row>
    </>

  )
}

export default Store
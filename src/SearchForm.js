import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Search Character Name</Form.Label>
          <Form.Control onChange={onParamChange} value={params.name} name="name" type="text" />
        </Form.Group>      
      </Form.Row>
    </Form>
  )
}

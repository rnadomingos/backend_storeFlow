import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ForgotPasswordScreen() {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form">
          <h4>Entre com seu cadastrado</h4>
          <Form >
            <Form.Group controlId='user_dms' className="mb-2">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type='text'
                required
              >
              </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Enviar
            </Button>
            <Row className='py-1'>
              <Col>
                <Link
                  to='/'>
                  Login
                </Link>
              </Col>
            </Row>
          </Form>

        </div>
      </div >
    </div >
  )
}

export { ForgotPasswordScreen }
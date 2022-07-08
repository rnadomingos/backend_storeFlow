import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Loader } from '../../layout/Loader'
import { forgotPasswordAction } from '../actions/forgotPasswordAction'
import { CLEAN_ERRORS, FORGOT_PASSWORD_RESET } from '../constants/accountConstants'

function ForgotPasswordScreen({ history }) {

  const [email, setEmail] = useState('')

  const { error, loading, success } = useSelector(state => state.forgotPassword)

  const alert = useAlert()
  const dispatch = useDispatch()

  useEffect(() => {

    if (error) {
      alert.error('E-mail não cadastrado!');
      dispatch({ type: CLEAN_ERRORS });
    }

    if (success) {
      alert.success('E-mail enviado!');
      history.push('/')
      dispatch({ type: FORGOT_PASSWORD_RESET })
    }
  }, [history, error, success, alert, dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(forgotPasswordAction(email))
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form">
          <h4>Digite o seu e-mail</h4>
          {loading ? <Loader />
            : (<Form onSubmit={submitHandler}>
              <Form.Group controlId='user_dms' className="mb-2">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type='text'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
            )}
        </div>
      </div >
    </div >
  )
}

export { ForgotPasswordScreen }
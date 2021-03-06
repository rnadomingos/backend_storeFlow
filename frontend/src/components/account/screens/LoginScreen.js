import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginAction } from '../actions/loginAction'
import { Loader } from '../../layout/Loader'
import { useAlert } from 'react-alert'
import { CLEAN_ERRORS } from '../constants/accountConstants'

function LoginScreen({ location, history }) {

  const [user_dms, setUser_dms] = useState('')
  const [password, setPassword] = useState('')

  const { error, loading, isAuthenticated } = useSelector(state => state.userLogin)

  const alert = useAlert()
  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1] : '/home'

  useEffect(() => {
    if (isAuthenticated) {
      history.push(redirect)
    }

    if (error) {
      alert.error('Usuário ou senha incorreta!');
      dispatch({ type: CLEAN_ERRORS });
    }

  }, [alert, dispatch, error, history, isAuthenticated, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginAction(user_dms, password))
  }

  return (

    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form">
          <h3>Entre com seu Login</h3>
          {loading ? <Loader /> : (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='user_dms' className="mb-2">
                <Form.Label>Usuário do DMS</Form.Label>
                <Form.Control
                  type='text'
                  required
                  value={user_dms}
                  onChange={(e) => setUser_dms(e.target.value)}
                >

                </Form.Control>
              </Form.Group>
              <Form.Group controlId='password' className="mb-2">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type='password'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                >

                </Form.Control>
              </Form.Group>
              <Button type='submit' variant='primary'>
                Logar
              </Button>
              <Row className='py-1'>
                <Col>
                  <Link
                    to='/password/forgot'>
                    Esqueceu a senha?
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

export { LoginScreen }
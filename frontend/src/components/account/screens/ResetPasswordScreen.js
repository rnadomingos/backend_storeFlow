import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Form, Row } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import { resetPasswordAction } from "../actions/resetPasswordAction"
import { useAlert } from "react-alert"
import { CLEAN_ERRORS } from "../constants/accountConstants"

function ResetPasswordScreen({ history }) {

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token")

  const { error, success } = useSelector(state => state.forgotPassword)

  const alert = useAlert()
  const dispatch = useDispatch()

  useEffect(() => {

    if (error) {
      alert.error('Link para troca de senha invalido')
      dispatch({ type: CLEAN_ERRORS });
    }

    if (success) {
      alert.success('Senha alterada com sucesso')
      history.push('/')
    }

  }, [dispatch, error, success, history, alert])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      dispatch(resetPasswordAction(password, token))
    } else {
      alert('Senhas não confere')
    }
  }

  return (

    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form">
          <h3>Entre com seu Login</h3>

          <Form onSubmit={submitHandler}>
            <Form.Group controlId='password' className="mb-2">
              <Form.Label>Nova Senha</Form.Label>
              <Form.Control
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='passwordConfirm' className="mb-2">
              <Form.Label>Confirmar Senha</Form.Label>
              <Form.Control
                type='password'
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              >
              </Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Salvar
            </Button>
            <Row className='py-1'>
              <Col>
                <Link
                  to='/'>
                  Cancelar
                </Link>
              </Col>
            </Row>
          </Form>

        </div>
      </div >
    </div >

  )
}

export { ResetPasswordScreen }
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { userUpdatePasswordAction } from "../actions/userUpdatePasswordAction"
import { CLEAN_ERRORS, USER_UPDATE_PASSWORD_RESET } from "../constants/accountConstants"
import { FormContainer } from "../../layout/FormContainer"
import { Loader } from "../../layout/Loader"
import { useAlert } from "react-alert"

function UpdatePasswordScreen({ history }) {

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState("")

  const { error, loading, success } = useSelector(state => state.userUpdatePasswordReducer)

  const alert = useAlert()
  const dispatch = useDispatch()

  useEffect(() => {

    if (success) {
      alert.success('Senha alterada com sucesso')
      dispatch({ type: USER_UPDATE_PASSWORD_RESET })
      history.push('/home')
    }

    if (error) {
      alert.error(`Error: ${error}!`);
      dispatch({ type: CLEAN_ERRORS });
    }

  }, [dispatch, success, history, error, alert])

  const submitHandler = (e) => {
    e.preventDefault()
    if (newPassword === confirmPassword) {
      dispatch(userUpdatePasswordAction(oldPassword, newPassword))
    } else {
      alert.error('Nova senha e confirmar senha não confere')
    }
  }

  return (
    <div>
      <FormContainer>
        <h1>Editar Senha</h1>
        {loading ? <Loader />
          : (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='oldPassword' className="mb-2">
                <Form.Label>Senha Atual</Form.Label>
                <Form.Control
                  type='password'
                  required
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                >
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='newPassword' className="mb-2">
                <Form.Label>Nova Senha</Form.Label>
                <Form.Control
                  type='password'
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                >
                </Form.Control>
              </Form.Group>

              <Form.Group controlId='confirmPassword' className="mb-2">
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
                    to='/home'>
                    Cancelar
                  </Link>
                </Col>
              </Row>
            </Form>
          )
        }
      </FormContainer>
    </div>
  )
}

export { UpdatePasswordScreen }
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { FormContainer } from "../../../layout/FormContainer"
import { Loader } from '../../../layout/Loader'
import { Message } from '../../../layout/Message'
import { userUpdateAction } from "../../actions/admin/userUpdateAction"
import { userDetailAction } from "../../actions/userDetailAction"
import { CLEAN_ERRORS, USER_DETAIL_RESET, USER_UPDATE_RESET } from "../../constants/accountConstants"
import { storesListActions } from "../../../store/actions/admin/storesListActions"
import { useAlert } from "react-alert"

function UpdateUserScreen({ history, match }) {

  const [user_dms, setUser_dms] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [is_active, setIsActive] = useState(true)
  const [is_admin, setIsAdmin] = useState(false)
  const [id_store, setIdstore] = useState('')

  const userId = match.params.id

  const { error: errorDetail, user } = useSelector(state => state.userDetailReducer)

  const { stores } = useSelector(state => state.storesListReducer)

  const { error, loading, success } = useSelector(state => state.userUpdateReducer)

  const alert = useAlert()
  const dispatch = useDispatch()

  useEffect(() => {

    if (!user || userId !== user.id) {
      dispatch(userDetailAction(userId))
      dispatch(storesListActions())

    } else {
      setName(user.name)
      setEmail(user.email)
      setUser_dms(user.user_dms)
      setIsActive(user.is_active)
      setIsAdmin(user.is_admin)
    }


    if (errorDetail) {
      alert.error(`Error: ${errorDetail}`)
      dispatch({ type: CLEAN_ERRORS });
    }

    if (error) {
      alert.error(`Error: ${error}`)
      dispatch({ type: CLEAN_ERRORS });
    }

    if (success) {
      dispatch({ type: USER_DETAIL_RESET })
      dispatch({ type: USER_UPDATE_RESET })
      history.push('/admin/users')

    }
  }, [error, dispatch, success, history, user, userId, errorDetail, alert])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userUpdateAction({ id: user.id, user_dms, name, email, password, is_active, is_admin, id_store }))
  }


  return (
    <div>
      <FormContainer>
        <h1>Novo Vendedor</h1>
        {loading ? <Loader />
          : (
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o nome do(a) vedendor(a)"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o e-mail do(a) vedendor(a)"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='password' className="mb-2">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                >
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Usuário do Sistema</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o nome do(a) Usuário(a) do sistema"
                  required
                  value={user_dms}
                  onChange={(e) => setUser_dms(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Lojas</Form.Label>
                <Form.Select
                  value={id_store}
                  onChange={(e) => setIdstore(e.target.value)}
                >
                  {stores.map(store => (
                    <option key={store.id}
                      value={store.id}
                    >{store.name}</option>
                  ))}

                </Form.Select>
              </Form.Group>

              <Form.Group controlId='is_admin'>
                <Form.Check
                  type='checkbox'
                  label='Admin'
                  checked={is_admin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                >
                </Form.Check>
              </Form.Group>


              <Form.Group controlId='is_active'>
                <Form.Check
                  type='checkbox'
                  label='Ativo'
                  checked={is_active}
                  onChange={(e) => setIsActive(e.target.checked)}
                >
                </Form.Check>
              </Form.Group>


              <Button
                className='btn-space'
                variant="primary"
                type="submit"
              >
                Salvar
              </Button>
              <Link to={`/admin/users`}>
                <Button
                  variant="secondary">
                  Cancelar
                </Button>
              </Link>
            </Form>
          )
        }




      </FormContainer >
    </div>
  )
}

export { UpdateUserScreen }
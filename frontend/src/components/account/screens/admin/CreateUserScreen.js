import { useEffect, useState } from "react"
import { useAlert } from "react-alert"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FormContainer } from "../../../layout/FormContainer"
import { Loader } from "../../../layout/Loader"
import { storesListActions } from "../../../store/actions/admin/storesListActions"
import { userCreateAction } from "../../actions/admin/userCreateAction"
import { CLEAN_ERRORS, USER_CREATE_RESET } from "../../constants/accountConstants"

function CreateUserScreen({ history }) {
  const [user_dms, setUser_dms] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [id_store, setIdstore] = useState('')

  const { error, loading, success } = useSelector(state => state.userCreateReducer)
  const { stores } = useSelector(state => state.storesListReducer)

  const alert = useAlert()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(storesListActions())

    if (success) {
      alert.success('Usuário cadastrado !')
      dispatch({ type: USER_CREATE_RESET })
      history.push('/admin/users')
    }

    if (error) {
      alert.error(`Error: ${error}`)
      dispatch({ type: CLEAN_ERRORS });
    }

  }, [dispatch, success, history, error, alert])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userCreateAction({ user_dms, name, email, password, id_store }))
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
                  required
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
                    <option
                      value={store.id}
                    >{store.name}</option>
                  ))}

                </Form.Select>
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

export { CreateUserScreen }
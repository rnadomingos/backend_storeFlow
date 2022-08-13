import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormContainer } from '../../../layout/FormContainer'
import { Loader } from '../../../layout/Loader'
import { Message } from '../../../layout/Message'
import { storesListActions } from '../../../store/actions/admin/storesListActions'
import { sellerCreateAction } from '../../actions/admin/sellerCreateAction'
import { SELLER_CLEAN_ERRORS, SELLER_CREATE_RESET } from '../../constants/sellerConstants'
import { useAlert } from "react-alert"

function CreateSellerScreen({ history }) {

  const [name, setName] = useState('')
  const [user_dms, setUser_dms] = useState('')
  const [id_store, setIdStore] = useState('')

  const { error, loading, success } = useSelector(state => state.sellerCreateReducer)
  const { stores } = useSelector(state => state.storesListReducer)

  const alert = useAlert()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(storesListActions())


    if (error) {
      alert.error(`Problema ${error} ao gravar novo vendendor`)
      dispatch({type: SELLER_CLEAN_ERRORS})
    }

    if (success) {
      history.push('/admin/sellers')
      dispatch({ type: SELLER_CREATE_RESET })
    }

  }, [dispatch, error, success, history, alert])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(sellerCreateAction({ name, user_dms, id_store }))
  }


  return (
    <div>
      <FormContainer>
        <h1>Novo Vendedor</h1>
        {error && <Message>Problema {error} ao gravar novo registro</Message>}
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
                  onChange={(e) => setIdStore(e.target.value)}
                >
                  <option>Selecione uma loja</option>
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
              <Link to={`/admin/sellers`}>
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

export { CreateSellerScreen }
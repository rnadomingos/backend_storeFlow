import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormContainer } from '../../../layout/FormContainer'
import { Loader } from '../../../layout/Loader'
import { Message } from '../../../layout/Message'
import { storesListActions } from '../../../store/actions/admin/storesListActions'
import { sellerUpdateAction } from '../../actions/admin/sellerUpdateAction'
import { cleanErrors } from '../../actions/cleanErrors'
import { sellerDetailAction } from '../../actions/sellerDetailAction'
import { SELLER_UPDATE_RESET } from '../../constants/sellerConstants'


function UpdateSellerScreen({ history, match }) {

  const [name, setName] = useState('')
  const [user_dms, setUser_dms] = useState('')
  const [is_active, setIsActive] = useState(true)
  const [id_store, setIdstore] = useState('')

  const userDMS = match.params.user_dms

  const { error: errorDetail, seller } = useSelector(state => state.sellerDetailReducer)
  const { stores } = useSelector(state => state.storesListReducer)

  const { error, loading, success } = useSelector(state => state.sellerUpdateReducer)

  const dispatch = useDispatch()

  useEffect(() => {

    if (!seller || userDMS !== seller.user_dms) {
      dispatch(sellerDetailAction(userDMS))
      dispatch(storesListActions())

    } else {
      setName(seller.name)
      setUser_dms(seller.user_dms)
      setIsActive(seller.is_active)
      setIdstore(seller.id_store)
    }


    if (errorDetail) {
      alert(`Problema ${errorDetail} ao gravar nova loja`)
      dispatch(cleanErrors())
    }

    if (error) {
      alert(`Problema ${error} ao gravar nova loja`)
      dispatch(cleanErrors())
    }

    if (success) {
      history.push('/admin/sellers')
      dispatch({ type: SELLER_UPDATE_RESET })
    }

  }, [dispatch, seller, userDMS, error, errorDetail, success, history])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(id_store);
    dispatch(sellerUpdateAction({ id: seller.id, name, user_dms, is_active, id_store }))
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
                <Form.Label>Disabled select menu</Form.Label>
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
                salvar
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

export { UpdateSellerScreen }
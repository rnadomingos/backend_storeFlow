import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormContainer } from '../../layout/FormContainer'
import { Loader } from '../../layout/Loader'
import { Message } from '../../layout/Message'
import { storeUpdateAction } from '../actions/admin/storeUpdateAction'
import { cleanErrors } from '../actions/cleanErrors'
import { storesDetailActions } from '../actions/storeDetailActions'
import { STORE_DETAIL_RESET, STORE_UPDATE_RESET } from '../constants/storeConstants'

function UpdateStoreScreen({ history, match }) {

  const [cnpj, setCNPJ] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [is_active, setIsActive] = useState(true)

  const storeId = match.params.id

  const { error: errorDetail, store } = useSelector(state => state.storesDetailReducer)

  const { error, loading, success } = useSelector(state => state.storesUpdateReducer)

  const dispatch = useDispatch()

  useEffect(() => {

    if (!store || storeId !== store.id) {
      dispatch(storesDetailActions(storeId))

    } else {
      setCNPJ(store.cnpj)
      setName(store.name)
      setBrand(store.brand)
      setIsActive(store.is_active)
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
      dispatch({ type: STORE_DETAIL_RESET })
      dispatch({ type: STORE_UPDATE_RESET })
      history.push('/admin/stores')

    }
  }, [error, dispatch, success, history, store, storeId, errorDetail])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(storeUpdateAction({ id: store.id, cnpj, name, brand, is_active }))
  }


  return (
    <div>
      <FormContainer>
        <h1>Editar Loja</h1>
        {error && <Message>Problema {error} ao gravar nova loja</Message>}
        {loading ? <Loader />
          : (
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite CNPJ"
                  required
                  value={cnpj}
                  onChange={(e) => setCNPJ(e.target.value)}
                />

              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nome da Loja</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o nome da loja"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Montadora / Fabricante</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o nome da montadora"
                  required
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
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
                Alterar
              </Button>
              <Link to={`/admin/stores`}>
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

export { UpdateStoreScreen }
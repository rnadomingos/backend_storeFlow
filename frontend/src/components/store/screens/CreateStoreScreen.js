import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormContainer } from '../../layout/FormContainer'
import { Loader } from '../../layout/Loader'
import { cleanErrors, storeCreateAction } from '../actions/admin/storeCreateAction'
import { Message } from '../../layout/Message'
import { STORE_CREATE_RESET } from '../constants/storeConstants'

function CreateStoreScreen({ history }) {

  const [cnpj, setCNPJ] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')

  const dispatch = useDispatch()

  const storeCreate = useSelector(state => state.storeCreateReducer)
  const { error, loading, success } = storeCreate

  useEffect(() => {
    if (error) {
      alert(`Problema ${error} ao gravar nova loja`)
      dispatch(cleanErrors())
    }

    if (success) {
      history.push('/admin/stores')
      dispatch({ type: STORE_CREATE_RESET })
    }
  }, [error, dispatch, success, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(storeCreateAction({ cnpj, name, brand }))
  }

  return (
    <div>
      <FormContainer>
        <h1>Nova Loja</h1>
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

export { CreateStoreScreen } 
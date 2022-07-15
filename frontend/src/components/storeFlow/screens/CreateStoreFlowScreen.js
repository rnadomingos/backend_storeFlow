import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormContainer } from '../../layout/FormContainer'
import { Loader } from '../../layout/Loader'
import { storeSellersAction } from '../../store/actions/storeSellersAction'

function CreateStoreFlowScreen({ history }) {

  const [id_seller, setId_seller] = useState('')

  const { userInfo } = useSelector(state => state.userLogin)
  const { error, loading, success } = useSelector(state => state.storeFlowCreateReducer)
  const { storeSellers } = useSelector(state => state.storeSellersReducer)

  const alert = useAlert()
  const dispatch = useDispatch()
  const storeId = userInfo.user.id_store


  console.log(storeSellers)

  useEffect(() => {
    dispatch(storeSellersAction(storeId))
  }, [dispatch, storeId])

  const submitHandler = (e) => {
    e.preventDefault()
    //dispatch(userCreateAction({ user_dms, name, email, password, id_store }))
  }


  return (
    <div> <FormContainer>
      <h1>Finalizar Venda</h1>
      {loading ? <Loader />
        : (
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="string"
                placeholder="Digite o nome do(a) cliente(a)"
                required

              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="string"
                placeholder="Digite o e-mail do(a) cliente(a)"
                required

              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="string"
                placeholder="Digite o telefone do(a) cliente(a)"
                required

              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="string"
                placeholder="Data da compra"
                required

              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="string"
                placeholder="Hora da finalização"
                required

              />
            </Form.Group>
            <Form.Group controlId='test_driver'>
              <Form.Check
                type='checkbox'
                label='Test Driver'
              >
              </Form.Check>
            </Form.Group>


            <Form.Group controlId='sold'>
              <Form.Check
                type='checkbox'
                label='Venda Efetuada'
              >
              </Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Label>Vendedor</Form.Label>
              <Form.Select
                value={id_seller}
                onChange={(e) => setId_seller(e.target.value)}
              >
                {storeSellers.map(seller => (
                  <option key={seller.id}
                    value={seller.id}
                  >{seller.name}</option>
                ))}

              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Segmento</Form.Label>
              {/* <Form.Select
                value={id_store}
                onChange={(e) => setIdstore(e.target.value)}
              >
                {stores.map(store => (
                  <option
                    value={store.id}
                  >{store.name}</option>
                ))}

              </Form.Select> */}
            </Form.Group>

            <Form.Group>
              <Form.Label>Tipo de Serviço</Form.Label>
              {/* <Form.Select
                value={id_store}
                onChange={(e) => setIdstore(e.target.value)}
              >
                {stores.map(store => (
                  <option
                    value={store.id}
                  >{store.name}</option>
                ))}

              </Form.Select> */}
            </Form.Group>

            <Form.Group>
              <Form.Label>Tipo de Prospecção</Form.Label>
              {/* <Form.Select
                value={id_store}
                onChange={(e) => setIdstore(e.target.value)}
              >
                {stores.map(store => (
                  <option
                    value={store.id}
                  >{store.name}</option>
                ))}

              </Form.Select> */}
            </Form.Group>

            <Button
              className='btn-space'
              variant="primary"
              type="submit"
            >
              Salvar
            </Button>
            <Link to={`/home`}>
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

export { CreateStoreFlowScreen }
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormContainer } from '../../layout/FormContainer'
import { Loader } from '../../layout/Loader'
import { prospectionListAction } from '../../prospection/actions/prospectionListAction'
import { serviceTypeListAction } from '../../serviceType/actions/ServiceTypeListAction'
import { storeSegmentListAction } from '../../store/actions/admin/storeSegmentListAction'
import { storeSellersAction } from '../../store/actions/storeSellersAction'
import { storeCreateAction } from '../actions/storeFlowAction'
import { STORE_FLOW_CREATE_RESET } from '../constants/storeFlowConstants'

function CreateStoreFlowScreen({ history }) {

  const [client_name, setName] = useState('')
  const [client_email, setEmail] = useState('')
  const [client_phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [test_driver, setTest_driver] = useState(false)
  const [sold, setSold] = useState(false)
  const [id_seller, setId_seller] = useState('')
  const [id_type_service, setId_type_service] = useState('')
  const [id_prospection, setId_prospection] = useState('')
  const [id_store_segment, setId_segment] = useState('')

  const { userInfo } = useSelector(state => state.userLogin)
  const { error, loading, success } = useSelector(state => state.storeFlowCreateReducer)
  const { storeSellers } = useSelector(state => state.storeSellersReducer)
  const { serviceTypes } = useSelector(state => state.serviceTypeListReducer)
  const { prospection } = useSelector(state => state.prospectionListReducer)
  const { storeSegment } = useSelector(state => state.storeSegmentListReducer)

  const alert = useAlert()
  const dispatch = useDispatch()
  const id_store = userInfo.user.id_store

  const serviceTypesActive = serviceTypes.filter(st => st.is_active === true)
  const prospectionActive = prospection.filter(pp => pp.is_active === true)


  useEffect(() => {

    if (success) {
      history.push('/home')
      dispatch({ type: STORE_FLOW_CREATE_RESET })
    }

    if (error) {
      alert.error(error)
      dispatch({ type: STORE_FLOW_CREATE_RESET })
    }


    dispatch(storeSellersAction(id_store))
    dispatch(storeSegmentListAction(id_store))
    dispatch(serviceTypeListAction())
    dispatch(prospectionListAction())
  }, [alert, dispatch, error, history, id_store, success])

  const submitHandler = (e) => {
    e.preventDefault()
   
    dispatch(storeCreateAction({
      client_name,
      client_email,
      client_phone,
      date,
      time,
      test_driver,
      sold,
      id_seller,
      id_type_service,
      id_prospection,
      id_store_segment,
      id_store
    }))
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
                value={client_name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="string"
                placeholder="Digite o e-mail do(a) cliente(a)"
                required
                value={client_email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="string"
                placeholder="Digite o telefone do(a) cliente(a)"
                required
                value={client_phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="string"
                placeholder="Data da compra"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="string"
                placeholder="Hora da finalização"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='test_driver'>
              <Form.Check
                type='checkbox'
                label='Test Driver'
                checked={test_driver}
                onChange={(e) => setTest_driver(e.target.checked)}
              >
              </Form.Check>
            </Form.Group>


            <Form.Group controlId='sold'>
              <Form.Check
                type='checkbox'
                label='Venda Efetuada'
                checked={sold}
                onChange={(e) => setSold(e.target.checked)}
              >
              </Form.Check>
            </Form.Group>
            <Form.Group>
              <Form.Label>Vendedor</Form.Label>
              <Form.Select
                value={id_seller}
                onChange={(e) => setId_seller(e.target.value)}
              >
                <option>Selecione um(a) Vendedor(a)</option>
                {storeSellers.map(seller => (
                  <option key={seller.id}
                    value={seller.id}
                  >{seller.name}</option>
                ))}

              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Tipo de Serviço</Form.Label>
              <Form.Select
                value={id_type_service}
                onChange={(e) => setId_type_service(e.target.value)}
              >
                <option>Selecione um tipo de serviço</option>
                {serviceTypesActive.map(st => (
                  <option key={st.id}
                    value={st.id}
                  >{st.name}</option>
                ))}

              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Segmento</Form.Label>
              <Form.Select
                value={id_store_segment}
                onChange={(e) => setId_segment(e.target.value)}
              >
                <option>Selecione um segmento</option>
                {storeSegment.map(segment => (
                  <option key={segment.id}
                    value={segment.id}
                  >{segment.name}</option>
                ))}

              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Tipo de Prospecção</Form.Label>
              <Form.Select
                value={id_prospection}
                onChange={(e) => setId_prospection(e.target.value)}
              >
                <option>Selecione uma prospecção</option>
                {prospectionActive.map(pp => (
                  <option key={pp.id}
                    value={pp.id}
                  >{pp.name}</option>
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
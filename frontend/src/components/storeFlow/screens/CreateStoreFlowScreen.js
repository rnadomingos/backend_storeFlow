import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [test_driver, setTest_drive] = useState(false)
  const [comments, setComments] = useState('')
  const [sold, setSold] = useState(false)
  const [id_seller, setId_seller] = useState('')
  const [id_type_service, setId_type_service] = useState('')
  const [id_prospection, setId_prospection] = useState('')
  const [id_store_segment, setId_segment] = useState('')
  const [id_social_media, setId_social_media] = useState('')
  const [socialMedia, setSocialMedia] = useState([])
  const [disabled, setDisabled] = useState(true)


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
    }

    dispatch(storeSellersAction(id_store))
    dispatch(storeSegmentListAction(id_store))
    dispatch(serviceTypeListAction())
    dispatch(prospectionListAction())

  }, [alert, dispatch, error, history, id_store, success])

  const changeProspectionHandler = ((e) => {
    setId_prospection(e.target.value)

    let [prospMedia] = prospection.filter(pp => pp.id === e.target.value)
    const { socialMedia } = prospMedia
    setSocialMedia(socialMedia)

    if (socialMedia.length) {
      setDisabled(false)
    } else {
      setId_social_media('')
      setDisabled(true)
    }

  })

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
      id_store,
      id_social_media,
      comments
    }))
  }

  return (
    <div>
      <h2>Nova Passagem</h2>
      {loading ? <Loader />
        : (
          <div className='flow'>
            <hr />
            <Form onSubmit={submitHandler}>
              <Row>
                <Form.Group as={Col} xs={4} controlId="formGridDate">
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Data da Passagem"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} xs={3} controlId="formGridTime">
                  <Form.Label>Hora</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Hora da finalização"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row className='mb-2'>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="string"
                    placeholder="Digite o nome do(a) cliente(a)"
                    required
                    value={client_name}
                    onChange={(e) => setName(e.target.value.toUpperCase())}
                  />
                </Form.Group>
              </Row>
              <Row className='mb-2'>
                <Form.Group as={Col} xs={8} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control className='lg'
                    type="string"
                    placeholder="Digite o e-mail do(a) cliente(a)"
                    required
                    value={client_email}
                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  />
                </Form.Group>
                <Form.Group as={Col} xs={4} controlId="formGridPhone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Digite o telefone do(a) cliente(a)"
                    required
                    value={client_phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-1">
                <Form.Group as={Col} xs={4}>
                  <FloatingLabel controlId="floatingSelectGrid" label="Tipo de Serviço">
                    <Form.Select
                      value={id_type_service}
                      onChange={(e) => setId_type_service(e.target.value)}
                    >
                      <option></option>
                      {serviceTypesActive.map(st => (
                        <option key={st.id}
                          value={st.id}
                        >{st.name.toUpperCase()}</option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col}>
                  <FloatingLabel controlId="floatingSelectProspection" label="Prospecção">
                    <Form.Select
                      value={id_prospection}
                      onChange={changeProspectionHandler}
                    >
                      <option></option>
                      {prospectionActive.map(pp => (
                        <option key={pp.id}
                          value={pp.id}
                        >{pp.name.toUpperCase()}</option>
                      ))}
                    </Form.Select >
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col}>
                  <FloatingLabel controlId="floatingSelectProspection" label="Mídia Social">
                    <Form.Select
                      disabled={disabled}
                      value={id_social_media}
                      onChange={(e) => setId_social_media(e.target.value)}
                    >
                      <option></option>
                      {socialMedia.map(sm => (
                        <option key={sm.id}
                          value={sm.id}
                        >{sm.name.toUpperCase()}</option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className='mb-1'>
                <Form.Group as={Col} xs={4}>
                  <FloatingLabel controlId="floatingSelectSeller" label="Segmento">
                    <Form.Select
                      value={id_store_segment}
                      onChange={(e) => setId_segment(e.target.value)}
                    >
                      <option></option>
                      {storeSegment.map(segment => (
                        <option key={segment.id}
                          value={segment.id}
                        >{segment.name.toUpperCase()}</option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} xs={4}>
                  <FloatingLabel controlId="floatingSelectSeller" label="Vendedor">
                    <Form.Select
                      value={id_seller}
                      onChange={(e) => setId_seller(e.target.value)}
                    >
                      <option></option>
                      {storeSellers.map(seller => (
                        <option key={seller.id}
                          value={seller.id}
                        >{seller.name.toUpperCase()}</option>
                      ))}
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col}
                  xs={4}>
                  <Form.Group controlId="test_drive">
                    <Form.Check
                      type='checkbox'
                      label='Test Drive Realizado'
                      checked={test_driver}
                      onChange={(e) => setTest_drive(e.target.checked)}
                    />
                  </Form.Group>
                  <Form.Group controlId="sold">
                    <Form.Check
                      type='checkbox'
                      label='Venda Efetuada'
                      checked={sold}
                      onChange={(e) => setSold(e.target.checked)}
                    />
                  </Form.Group>
                </Form.Group>
              </Row>
              <Row className='mb-2'>
                <Form.Group className="mb-2" controlId="comments">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Observações"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Button
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
              </Row>
            </Form>
          </div>
        )
      }
    </div>
  )
}

export { CreateStoreFlowScreen }
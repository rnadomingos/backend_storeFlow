import React, { useEffect, useState } from 'react'
import { Button, Form, Col, Row, FloatingLabel, ListGroup, Badge, CloseButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormContainer } from '../../layout/FormContainer'
import { Loader } from '../../layout/Loader'
import { Message } from '../../layout/Message'
import { storeUpdateAction } from '../actions/admin/storeUpdateAction'
import { cleanErrors } from '../actions/cleanErrors'
import { storesDetailActions } from '../actions/storeDetailActions'
import { segmentListAction } from '../../segment/actions/admin/segmentListAction'
import { storeSegmentListAction } from '../../store/actions/admin/storeSegmentListAction'
import { storeJoinSegmentAction } from '../../store/actions/admin/storeJoinSegmentAction'
import { storeSeparateSegmentAction } from '../../store/actions/admin/storeSeparateSegmentAction'
import { STORE_DETAIL_RESET, STORE_SEGMENT_JOIN_RESET, STORE_SEGMENT_LIST_RESET, STORE_SEGMENT_SEPARATE_RESET, STORE_UPDATE_RESET } from '../constants/storeConstants'
import '../../../css/formJoinSegment.css';

function UpdateStoreScreen({ history, match }) {

  const [cnpj, setCNPJ] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [is_active, setIsActive] = useState(true)
  const [id_segment, setIdSegment] = useState('')
  const [del_segment, setDelSegment] = useState('')

  const storeId = match.params.id

  const { error: errorDetail, store } = useSelector(state => state.storesDetailReducer)
  const { segment } = useSelector(state => state.segmentListReducer)

  const { storeSegment } = useSelector(state => state.storeSegmentListReducer)

  if (storeSegment.length === 0) {
    storeSegment.push({ id: 1, name: 'Sem Dados.', description: 'Não há Segmentos vinculados a esta loja.', as: 'ul' })
  }

  const { error, loading, success } = useSelector(state => state.storesUpdateReducer)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(segmentListAction())
    dispatch(storeSegmentListAction(storeId))

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
      dispatch({ type: STORE_SEGMENT_LIST_RESET })
      dispatch({ type: STORE_UPDATE_RESET })
      dispatch({ type: STORE_SEGMENT_JOIN_RESET })
      dispatch({ type: STORE_SEGMENT_SEPARATE_RESET })
      history.push('/admin/stores')

    }
  }, [error, dispatch, success, history, store, storeId, errorDetail])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(storeUpdateAction({ id: store.id, cnpj, name, brand, is_active }))
  }

  const joinStoreSegment = (e) => {
    e.preventDefault()
    dispatch(storeJoinSegmentAction({ storeId, segmentId: id_segment }))
    dispatch(storeSegmentListAction(storeId))
  }

  const separateStoreSegment = (e) => {
    e.preventDefault()
    dispatch(storeSeparateSegmentAction({ storeId, segmentId: del_segment }))
    dispatch(storeSegmentListAction(storeId))
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
      <Row className="g-2">
        <h3>Segmentos da Loja</h3>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Segmentos disponíveis">
            <Form.Select
              aria-label="Floating label select example"
              value={id_segment}
              onChange={(e) => setIdSegment(e.target.value)}
            >
              <option></option>
              {segment.map(segment => (
                <option
                  key={segment.id}
                  value={segment.id}
                >{segment.name.toUpperCase()}</option>
              ))}
            </Form.Select>
          </FloatingLabel>

        </Col>
        <Col md={1}>
          <Button className='my-3'
            title='Adiciona o segmento selecionado à loja'
            onClick={joinStoreSegment}>
            <i className='fas fa-arrow-right'></i>
          </Button>
          <Button className='my-3'
            title='Remove o segmento vinculado à loja'
            onClick={separateStoreSegment}>
            <i className='fas fa-trash'></i>
          </Button>
        </Col>
        <Col>
          <ListGroup as="ol" numbered>
            {storeSegment.map(segment => (
              <ListGroup.Item
                as="li"
                key={segment.id}
                className="d-flex justify-content-between align-items-start">
                < div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {segment.name.toUpperCase()}
                  </div>
                  {segment.description}
                </div>
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="groupDelete"
                  label="Remover"
                  id={segment.id}
                  onChange={(e) => setDelSegment(e.target.id)}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

    </div >
  )
}

export { UpdateStoreScreen }
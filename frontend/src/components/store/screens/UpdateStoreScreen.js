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
import { STORE_DETAIL_RESET, STORE_UPDATE_RESET } from '../constants/storeConstants'
import '../../../css/formJoinSegment.css';

function UpdateStoreScreen({ history, match }) {

  const [cnpj, setCNPJ] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [is_active, setIsActive] = useState(true)


  const storeCNPJ = match.params.cnpj

  const { error: errorDetail, store } = useSelector(state => state.storesDetailReducer)
  const { segment } = useSelector(state => state.segmentListReducer)

  // EM CORREÇÃO
  // const { segments } = store;
  // let comp
  // if (segments.length > 0) {
  //   comp = segments.map(segment => (
  //     <ListGroup.Item
  //       as="li"
  //       className="d-flex justify-content-between align-items-start"
  //     >
  //       <div className="ms-2 me-auto">
  //         <div className="fw-bold">{segment.name.toUpperCase()}</div>
  //         {segment.description}
  //       </div>
  //       <Button className='my-close'>
  //         <i className='fa fa-trash'></i>
  //       </Button>
  //     </ListGroup.Item>
  //   ))
  // } else {
  //   comp = <ListGroup.Item
  //     as="ul"
  //     className="d-flex justify-content-between align-items-start"
  //   >
  //     <div className="ms-2 me-auto">
  //       <div className="fw-bold">
  //         Sem dados.
  //       </div>
  //       Não há Segmentos vinculados a esta loja.
  //     </div>
  //   </ListGroup.Item>
  // }

  const { error, loading, success } = useSelector(state => state.storesUpdateReducer)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(segmentListAction())

    if (!store || storeCNPJ !== store.cnpj) {
      dispatch(storesDetailActions(storeCNPJ))

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
  }, [error, dispatch, success, history, store, storeCNPJ, errorDetail])

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
      <Row className="g-2">
        <h3>Segmentos da Loja</h3>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Segmentos disponíveis">
            <Form.Select aria-label="Floating label select example">
              <option></option>
              {segment.map(segment => (
                <option
                  value={segment.id}
                >{segment.name.toUpperCase()}</option>
              ))}
            </Form.Select>
          </FloatingLabel>

        </Col>
        <Col md={1}>
          <Button className='my-3' >
            <i className='fas fa-arrow-right'></i>
          </Button>
        </Col>
        <Col>
          <ListGroup as="ol" numbered>
            comp
          </ListGroup>
        </Col>
      </Row>

    </div>
  )
}

export { UpdateStoreScreen }
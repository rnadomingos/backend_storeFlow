import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Loader } from '../../layout/Loader'
import { Message } from '../../layout/Message'
import { storesListActions } from '../actions/admin/storesListActions'

function StoresScreen() {
  const dispatch = useDispatch()
  const { error, loading, stores } = useSelector(state => state.storesListReducer)

  useEffect(() => {
    dispatch(storesListActions())
  }, [dispatch])


  return (
    <div>
      <Row className='align-items-center'>
        <Col>
          <h1>Lojas</h1>
        </Col>

        <Col className='text-right'>
          <Link to={`/admin/store/new`}>
            <Button className='my-3' >
              <i className='fas fa-plus'></i> Cadastrar
            </Button>
          </Link>
        </Col>
      </Row>
      {loading
        ? (<Loader />)
        : error
          ? (<Message variant='danger'>{error}</Message>)
          : (
            <div>
              <Table striped bordered hover responsive className='table-md'>
                <thead>
                  <tr>
                    <th>CNPJ</th>
                    <th>NOME</th>
                    <th>MARCA</th>
                    <th>DATA CADASTRO</th>
                    <th>ATIVO</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {stores.map(store => (
                    <tr key={store.id}>
                      <td>{store.cnpj}</td>
                      <td>{store.name}</td>
                      <td>{store.brand}</td>
                      <td>{store.create_at}</td>
                      <td>{store.is_active ? <b className="greenColor">Ativo</b> :

                        <b className="redColor">Desativado</b>
                      }</td>

                      <td>
                        <Link to={`/admin/store/${store.cnpj}/edit`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </Table>


            </div>
          )
      }
    </div >

  )
}

export { StoresScreen }
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Loader } from '../../layout/Loader'
import { Message } from '../../layout/Message'
import { sellerListAction } from '../actions/sellerListAction'


function SellerScreen() {
  const dispatch = useDispatch()
  const sellersList = useSelector(state => state.sellersListReducer)
  const { error, loading, sellers } = sellersList


  useEffect(() => {
    dispatch(sellerListAction())
  }, [dispatch])


  return (
    <div>
      <Row className='align-items-center'>
        <Col>
          <h1>Vendedores</h1>
        </Col>

        <Col className='text-right'>
          <Link to={`/admin/seller/new`}>
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
                    <th>NOME</th>
                    <th>User DMS</th>
                    <th>DATA CADASTRO</th>
                    <th>ATIVO</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {sellers.map(seller => (
                    <tr key={seller.id}>
                      <td>{seller.name}</td>
                      <td>{seller.user_dms}</td>
                      <td>{seller.create_at}</td>
                      <td>{seller.is_active ? <b className="greenColor">Ativo</b> :

                        <b className="redColor">Desativado</b>
                      }</td>

                      <td>
                        <Link to={`/admin/seller/${seller.id}/edit`}>
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

export { SellerScreen }
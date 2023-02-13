import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Row, Table } from 'react-bootstrap'
import Pagination from "react-js-pagination"
import { Link } from 'react-router-dom'
import { Loader, Message, SearchBox } from '../../layout'
import { storesListActions } from '../actions/admin/storesListActions'

function StoresScreen({history}) {
  
  const [page, setPage] = useState(1)

  const { 
    error, 
    loading, 
    stores,
    total,
    limit_per_page
  } = useSelector(state => state.storesListReducer)
  
  let keyword = history.location.search.split('=')[1]
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(storesListActions(page, keyword))
  }, [dispatch, page, keyword])

  function setCurrentPage(pageNumber) {
    setPage(pageNumber)
  }

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
              <SearchBox url='admin/stores' />
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
                        <Link to={`/admin/store/${store.id}/edit`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </Table>
              <Pagination 
                activePage={page}
                itemsCountPerPage={limit_per_page}
                totalItemsCount={total ? total : 1}
                onChange={setCurrentPage}
                itemClass="page-item"
                linkClass="page-link"
              />


            </div>
          )
      }
    </div >

  )
}

export { StoresScreen }
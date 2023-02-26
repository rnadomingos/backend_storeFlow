import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Loader, Message, SearchBox } from '../../../layout'
import { sellerListAction } from '../../actions/sellerListAction'
import { sellerDeleteAction } from '../../actions/admin/sellerDeleteAction'
import Pagination from 'react-js-pagination'


function SellerScreen({ history }) {

  const [page, setPage] = useState(1)

  const dispatch = useDispatch()
  const { 
    error, 
    loading, 
    sellers,
    total,
    limit_per_page 
  }  = useSelector(state => state.sellersListReducer)
  
  let keyword = history.location.search.split('=')[1]

  const {  success: deleteSuccess } = useSelector(state => state.sellerDeleteReducer)


  useEffect(() => {
    dispatch(sellerListAction(page, keyword))

    if(deleteSuccess) {
      dispatch(sellerListAction())
    }
  }, [dispatch, deleteSuccess, page, keyword])

  const deleteHandler = (id) => {
    if (window.confirm('Deseja deletar este segmento?')) {
        dispatch(sellerDeleteAction(id))
    }
  }

  function setCurrentPage(pageNumber) {
    setPage(pageNumber)
  }

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
      <SearchBox url='admin/sellers'></SearchBox>
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
                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(seller.id)}>
                          <i className='fas fa-trash'></i>
                      </Button>
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

export { SellerScreen }
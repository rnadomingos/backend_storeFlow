import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Loader, Message, SearchBox } from '../../../layout/'
import { serviceTypeListAction } from '../../actions/ServiceTypeListAction'
import { serviceTypeDeleteAction } from '../../actions/admin/serviceTypeDeleteAction'
import Pagination from 'react-js-pagination'

function ServiceTypesScreen({history}) {
    
    const[page, setPage] = useState(1)

    const alert = useAlert()
    const dispatch = useDispatch()


    const {
        error,
        loading,
        serviceType,
        total,
        limit_per_page
    } = useSelector(state => state.serviceTypeListReducer)

    let keyword = history.location.search.split('=')[1]

    const { success: deleteSuccess, error: deleteError} = useSelector(state => state.serviceTypeDeleteReducer)

    useEffect(() => {
        dispatch(serviceTypeListAction(page, keyword))
        if(deleteSuccess) {
        dispatch(serviceTypeListAction())
        }
        if (deleteError) {
            alert.error('Error ao deletar registro')
        }
    }, [alert, deleteError, deleteSuccess, dispatch, page, keyword])


  function setCurrentPage(pageNumber) {
    setPage(pageNumber)
  }

    const deleteHandler = (id) => {
        if (window.confirm('Deseja deletar este segmento?')) {
            dispatch(serviceTypeDeleteAction(id))
        }
    }

    return (
        <div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Tipos de Serviço</h1>
                </Col>

                <Col className='text-right'>
                    <Link to={`/admin/service-type/new`}>
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
                    :
                    <div>
                        <SearchBox url='admin/service-types' />
                        <Table striped bordered hover responsive className='table-md'>
                            <thead>
                                <tr>
                                    <th>NOME</th>
                                    <th>DESCRIÇÃO</th>
                                    <th>DATA CADASTRO</th>
                                    <th>ATIVO</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {serviceType.map(serviceTypes => (
                                    <tr key={serviceTypes.id}>
                                        <td>{serviceTypes.name.toUpperCase()}</td>
                                        <td>{serviceTypes.description}</td>
                                        <td>{serviceTypes.create_at}</td>
                                        <td>{serviceTypes.is_active ? <b className='greenColor'>Ativo</b> :
                                            <b className='redColor'>Desativado</b>
                                        }</td>
                                        <td>
                                            <Link to={`/admin/service-type/${serviceTypes.id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </Link>
                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(serviceTypes.id)}>
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
            }
        </div >

    )
}

export { ServiceTypesScreen }
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { serviceTypeListAction } from '../../actions/admin/ServiceTypeListAction'
import { Loader } from '../../../layout/Loader'
import { Message } from '../../../layout/Message'



function ServiceTypesScreen() {

    const dispatch = useDispatch()
    const { error, loading, serviceTypes } = useSelector(state => state.serviceTypeListReducer)

    useEffect(() => {
        dispatch(serviceTypeListAction())
    }, [dispatch])



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
                                {serviceTypes.map(serviceTypes => (
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
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </Table>


                    </div>
            }
        </div >

    )
}

export { ServiceTypesScreen }
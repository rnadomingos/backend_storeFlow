import { useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "../../../layout/Loader";
import { Message } from "../../../layout/Message";
import { segmentDeleteAction } from "../../actions/admin/segmentDeleteAction";
import { segmentListAction } from '../../actions/admin/segmentListAction'


function SegmentScreen() {

  const dispatch = useDispatch()
  const {
    error,
    loading,
    segment
  } = useSelector(state => state.segmentListReducer)

  const {
    success
  } = useSelector(state => state.segmentDeleteReducer)

  useEffect(() => {
    dispatch(segmentListAction())
    if (success) {
      dispatch(segmentListAction())
    }
  }, [dispatch, success])

  const deleteHandler = (id) => {
    if (window.confirm('Deseja deletar este segmento?')) {
        dispatch(segmentDeleteAction(id))
    }
}

  return (
    <div>
      <Row className='align-items-center'>
        <Col>
          <h1>Segmento de Vendas</h1>
        </Col>

        <Col className='text-right'>
          <Link to={`/admin/segment/new`}>
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
                    <th>DESCRIÇÃO</th>
                    <th>DATA CADASTRO</th>
                    <th>ATIVO</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {segment.map(segment => (
                    <tr key={segment.id}>
                      <td>{segment.name.toUpperCase()}</td>
                      <td>{segment.description}</td>
                      <td>{segment.create_at}</td>
                      <td>{segment.is_active ? <b className="greenColor">Ativo</b> :

                        <b className="redColor">Desativado</b>
                      }</td>

                      <td>
                        <Link to={`/admin/segment/${segment.id}/edit`}>
                          <Button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </Button>
                        </Link>
                        <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(segment.id)}>
                          <i className='fas fa-trash'></i>
                      </Button>
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

export { SegmentScreen }
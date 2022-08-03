import { useEffect } from "react";
import {
  Button,
  Col,
  Row,
  Table
} from "react-bootstrap";
import {
  useDispatch,
  useSelector
} from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "../../../layout/Loader";
import { Message } from "../../../layout/Message";
import { prospectionDeleteAction } from "../../actions/admin/prospectionDeleteAction";
import { prospectionListAction } from "../../actions/prospectionListAction";


function ProspectionScreen() {

  const {
    error,
    loading,
    prospection
  } = useSelector(state => state.prospectionListReducer)

  const {
    success
  } = useSelector(state => state.prospectionDeleteReducer)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(prospectionListAction())
    if (success) {
      dispatch(prospectionListAction())
    }
  }, [dispatch, success])

  const deleteHandler = (id) => {
    if (window.confirm('Deseja Deletar está prospecção?')) {
        dispatch(prospectionDeleteAction(id))
    }
}

  return (
    <div>
      <Row className='align-items-center'>
        <Col>
          <h1>Prospecções</h1>
        </Col>

        <Col className='text-right'>
          <Link to={`/admin/prospection/new`}>
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
                {prospection.map(prospection => (
                  <tr key={prospection.id}>
                    <td>{prospection.name.toUpperCase()}</td>
                    <td>{prospection.description}</td>
                    <td>{prospection.created_at}</td>
                    <td>{prospection.is_active ? <b className='greenColor'>Ativo</b> :
                      <b className='redColor'>Desativado</b>
                    }</td>
                    <td>
                      <Link to={`/admin/prospection/${prospection.id}/edit`}>
                        <Button variant='light' className='btn-sm'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </Link>
                      <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(prospection.id)}>
                          <i className='fas fa-trash'></i>
                      </Button>
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

export { ProspectionScreen }
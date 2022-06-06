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
import { prospectionListAction } from "../../actions/admin/prospectionListAction";


function ProspectionScreen() {

  const dispatch = useDispatch()
  const {
    error,
    loading,
    prospection
  } = useSelector(state => state.prospectionListReducer)

  useEffect(() => {
    dispatch(prospectionListAction())
  }, [dispatch])


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
                      <Link to={`/admin/prospection/${prospection.name}/edit`}>
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

export { ProspectionScreen }
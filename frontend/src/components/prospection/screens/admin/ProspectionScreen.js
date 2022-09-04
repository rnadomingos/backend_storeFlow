import { useEffect, useState } from "react";
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
import { SearchBox } from "../../../layout/SearchBox";
import { prospectionDeleteAction } from "../../actions/admin/prospectionDeleteAction";
import { prospectionListAction } from "../../actions/prospectionListAction";
import Pagination from "react-js-pagination"


function ProspectionScreen({history}) {

  const [page, setPage] = useState(1)

  const {
    loading,
    prospection,
    total,
    limit_per_page
  } = useSelector(state => state.prospectionListReducer)

  let keyword = history.location.search.split('=')[1]

  const {
    success: deleteSuccess
  } = useSelector(state => state.prospectionDeleteReducer)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(prospectionListAction(page,keyword))
    if (deleteSuccess) {
      dispatch(prospectionListAction())
    }
  }, [dispatch, deleteSuccess, keyword, page])

  const deleteHandler = (id) => {
    if (window.confirm('Deseja deletar esta prospecção?')) {
        dispatch(prospectionDeleteAction(id))
    }
  }

  function setCurrentPage(pageNumber) {
    setPage(pageNumber)
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
      <SearchBox url='admin/prospections'/>
      {loading
        ? (<Loader />)
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

export { ProspectionScreen }
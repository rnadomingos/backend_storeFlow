import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "../../../layout/Loader";
import Pagination from "react-js-pagination"
import { socialMediaListAction } from "../../action/admin/socialMediaListAction"
import { SearchBox } from '../../../layout/SearchBox'

function SocialMediaListScreen({history}) {

  const[page, setPage] = useState(1)
  
  const {
    loading,
    socialMedia,
    total,
    limit_per_page
  } = useSelector(state => state.socialMediaListReducer)

  let keyword = history.location.search.split('=')[1]

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(socialMediaListAction(page, keyword))
  }, [dispatch, keyword, page])

  function setCurrentPage(pageNumber) {
    setPage(pageNumber)
  }

  return (
    <div>
      <Row className='align-items-center'>
        <Col>
          <h1>Mídias Sociais</h1>
        </Col>

        <Col className='text-right'>
          <Link to={`/admin/social-media/new`}>
            <Button className='my-3' >
              <i className='fas fa-plus'></i> Cadastrar
            </Button>
          </Link>
        </Col>
      </Row>
      <SearchBox url='admin/social-medias'/>
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
                  {socialMedia.map(socialMedia => (
                    <tr key={socialMedia.id}>
                      <td>{socialMedia.name.toUpperCase()}</td>
                      <td>{socialMedia.description}</td>
                      <td>{socialMedia.created_at}</td>
                      <td>{socialMedia.is_active ? <b className="greenColor">Ativo</b> :

                        <b className="redColor">Desativado</b>
                      }</td>

                      <td>
                        <Link to={`/admin/social-media/${socialMedia.id}/edit`}>
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
      }
    </div >

  )
}

export { SocialMediaListScreen }
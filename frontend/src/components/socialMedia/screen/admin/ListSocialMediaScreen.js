import { useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "../../../layout/Loader";
import { Message } from "../../../layout/Message";
import {
  socialMediaListAction
} from "../../action/admin/socialMediaListAction"

function SocialMediaListScreen() {

  const dispatch = useDispatch()
  const socialMediaList = useSelector(state => state.socialMediaListReducer)
  const {
    error,
    loading,
    socialMedia
  } = socialMediaList

  useEffect(() => {
    dispatch(socialMediaListAction())
  }, [dispatch])

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


            </div>
          )
      }
    </div >

  )
}

export { SocialMediaListScreen }
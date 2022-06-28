import { useEffect } from "react"
import { Button, Col, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Loader } from "../../../layout/Loader"
import { Message } from "../../../layout/Message"
import { usersListAction } from "../../actions/admin/usersListAction"

function UsersScreen() {
  const dispatch = useDispatch()

  const { error, loading, users } = useSelector(state => state.userListReducer)

  useEffect(() => {
    dispatch(usersListAction())
  }, [dispatch])

  return (
    <div>
      <Row className='align-items-center'>
        <Col>
          <h1>Usuários</h1>
        </Col>

        <Col className='text-right'>
          <Link to={`/admin/user/new`}>
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
                    <th>USER DMS</th>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>ADMINISTRADOR</th>
                    <th>DATA CADASTRO</th>
                    <th>ATIVO</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.user_dms}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.is_admin ? <b className="greenColor">Sim</b> :
                        <b className="redColor">Não</b>}
                      </td>
                      <td>{user.create_at}</td>
                      <td>{user.is_active ? <b className="greenColor">Ativo</b> :
                        <b className="redColor">Desativado</b>
                      }</td>

                      <td>
                        <Link to={`/admin/user/${user.id}/edit`}>
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
export { UsersScreen }
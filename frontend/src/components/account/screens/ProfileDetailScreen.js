import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { FormContainer } from '../../layout/FormContainer'
import { Loader } from '../../layout/Loader'

function ProfileDetailScreen() {

  const [user_dms, setUser_dms] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const { loading, userInfo } = useSelector(state => state.userLogin)

  useEffect(() => {
    setUser_dms(userInfo.user.user_dms)
    setEmail(userInfo.user.email)
    setName(userInfo.user.name)
  }, [userInfo.user.email, userInfo.user.name, userInfo.user.user_dms])


  return (
    <div>
      <FormContainer>
        <h1>Minha Conta</h1>
        {loading ? <Loader />
          : (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="string"
                  value={name}
                  readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="string"
                  value={email}
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Usuário do Sistema</Form.Label>
                <Form.Control
                  type="string"
                  value={user_dms}
                  readOnly
                />
              </Form.Group>

            </Form>
          )
        }
      </FormContainer >
    </div>
  )
}

export { ProfileDetailScreen }
import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FormContainer } from "../../../layout/FormContainer"
import { Loader } from "../../../layout/Loader"
import { Message } from "../../../layout/Message"
import {
  cleanErrors,
  prospectionCreateAction
} from "../../actions/admin/prospectionCreateAction"


function CreateProspectionScreen({ history }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()

  const {
    error,
    loading,
    success
  } = useSelector(
    state => state.prospectionCreateReducer
  )

  useEffect(() => {
    if (error) {
      alert(`Problema ${error} ao gravar nova Prospecção`)
      dispatch(cleanErrors)
    }

    if (success) {
      history.push('/admin/prospections')
    }
  }, [error, dispatch, success, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(prospectionCreateAction({
      name,
      description
    }))
  }

  return (
    <div>
      <FormContainer>
        <h1>Nova Prospecção</h1>
        {error && <Message>Problema {error} ao gravar novo Tipo de Serviço</Message>}
        {loading ? <Loader />
          : (
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite a Prospecção"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descrição da Prospecção</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite a Descrição da Prospecção"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Button
                className='btn-space'
                variant="primary"
                type="submit"
              >
                Salvar
              </Button>
              <Link to={`/admin/prospections`}>
                <Button
                  variant="secondary">
                  Cancelar
                </Button>
              </Link>
            </Form>
          )
        }

      </FormContainer >
    </div>
  )
}

export { CreateProspectionScreen }
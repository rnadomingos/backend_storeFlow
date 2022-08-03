import { useEffect, useState } from "react"
import { useAlert } from "react-alert"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FormContainer } from "../../../layout/FormContainer"
import { Loader } from "../../../layout/Loader"
import {
  prospectionCreateAction
} from "../../actions/admin/prospectionCreateAction"
import { PROSPECTION_CREATE_RESET } from "../../constants/prospectionConstants"


function CreateProspectionScreen({ history }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const alert = useAlert()
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
      alert.error(`Error: ${error}`)
      dispatch({ type: PROSPECTION_CREATE_RESET })
    }

    if (success) {
      history.push('/admin/prospections')
      dispatch({ type: PROSPECTION_CREATE_RESET })
    }
  }, [error, dispatch, success, history, alert])

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
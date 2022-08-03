import { useEffect, useState } from "react";
import { useAlert } from "react-alert"
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FormContainer } from "../../../layout/FormContainer";
import { Loader } from "../../../layout/Loader";
import { Message } from "../../../layout/Message";
import { prospectionDetailUpdateAction } from '../../actions/admin/prospectionDetailUpdateAction'
import { prospectionUpdateAction } from "../../actions/admin/prospectionUpdateAction";
import { PROSPECTION_DETAIL_RESET, PROSPECTION_UPDATE_RESET } from "../../constants/prospectionConstants";


function UpdateProspectionScreen({ history, match }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [is_active, setIsActive] = useState('')

  const prospectionID = match.params.id

  const {
    error: errorDetail,
    prospection
  } = useSelector(state => state.prospectionDetailUpdateReducer)

  const {
    error,
    loading,
    success
  } = useSelector(state => state.prospectionUpdateReducer)

  const alert = useAlert()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!prospection || prospectionID !== prospection.id) {
      dispatch(prospectionDetailUpdateAction(prospectionID))
    } else {
      setName(prospection.name)
      setDescription(prospection.description)
      setIsActive(prospection.is_active)
    }
    if (errorDetail) {
      alert(`Problema ${errorDetail} ao retornar os detalhes`)
      dispatch({ type: PROSPECTION_DETAIL_RESET })
    }

    if (error) {
      alert.error(`Problema ${error} ao gravar prospecção`)
      dispatch({ type: PROSPECTION_UPDATE_RESET })
    }

    if (success) {
      dispatch({ type: PROSPECTION_UPDATE_RESET })
      dispatch({ type: PROSPECTION_DETAIL_RESET })
      history.push('/admin/prospections')
    }
  }, [error, dispatch, success, history, prospection, prospectionID, errorDetail, alert])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(prospectionUpdateAction({ id: prospection.id, name, description, is_active }))
  }
  return (
    <div>
      <FormContainer>
        <h1>Editar Prospecção</h1>
        {error && <Message>Problema {error} ao gravar nova Prospecção</Message>}
        {loading ? <Loader />
          : (
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o nome da Prospecção"
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
              <Form.Group controlId='is_active'>
                <Form.Check
                  type='checkbox'
                  label='Ativo'
                  checked={is_active}
                  onChange={(e) => setIsActive(e.target.checked)}
                >
                </Form.Check>
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

export { UpdateProspectionScreen }
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FormContainer } from "../../../layout/FormContainer";
import { Loader } from "../../../layout/Loader";
import { serviceTypeCreateAction } from "../../actions/admin/serviceTypeCreateAction";
import { SERVICE_TYPE_CLEAN_ERRORS, SERVICE_TYPE_CREATE_RESET } from "../../constants/serviceTypeConstant";
import { useAlert } from "react-alert";

function CreateServiceTypeScreen({ history }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const alert = useAlert()
  const dispatch = useDispatch()

  const { error, loading, success } = useSelector(state => state.serviceTypeCreateReducer)

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch({type: SERVICE_TYPE_CLEAN_ERRORS})
    }

    if (success) {
      history.push('/admin/service-types')
      dispatch({ type: SERVICE_TYPE_CREATE_RESET })
    }
  }, [error, dispatch, success, history, alert])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(serviceTypeCreateAction({ name, description }))
  }

  return (
    <div>
      <FormContainer>
        <h1>Novo Tipo de Serviço</h1>
        {loading ? <Loader />
          : (
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o Tipo de Serviço"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descrição do Tipo de Serviço</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite a Descrição do Tipo de Serviço"
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
              <Link to={`/admin/service-types`}>
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

export { CreateServiceTypeScreen }
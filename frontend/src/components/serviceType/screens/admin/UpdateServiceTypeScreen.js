import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanErrors } from "../../actions/serviceTypeCleanErrors";
import { serviceTypeDetailActions } from '../../actions/serviceTypeDetailAction'
import { SERVICE_TYPE_UPDATE_RESET } from "../../constants/serviceTypeConstant";
import { serviceTypeUpdateAction } from '../../actions/admin/serviceTypeUpdateActions'
import { FormContainer } from "../../../layout/FormContainer";
import { Message } from "../../../layout/Message";
import { Loader } from "../../../layout/Loader";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function UpdateServiceTypeScreen({ history, match }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [is_active, setIsActive] = useState('')

  const serviceTypeID = match.params.id

  const { error: errorDetail, serviceType } = useSelector(state => state.serviceTypeDetailReducer)

  const { error, loading, success } = useSelector(state => state.serviceTypeUpdateReducer)

  const dispatch = useDispatch()

  console.log(serviceType);

  useEffect(() => {

    if (!serviceType || serviceTypeID !== serviceType.id) {
      dispatch(serviceTypeDetailActions(serviceTypeID))
      console.log('if');
    } else {
      console.log('else');
      setName(serviceType.name)
      setDescription(serviceType.description)
      setIsActive(serviceType.is_active)
    }

    if (errorDetail) {
      alert(`Problema ${errorDetail} ao gravar tipo de serviço`)
      dispatch(cleanErrors)
    }

    if (error) {
      alert(`Problema ${error} ao gravar tipo de serviço`)
    }

    if (success) {
      history.push('/admin/service-types')
      dispatch({ type: SERVICE_TYPE_UPDATE_RESET })
    }
  }, [error, dispatch, success, history, serviceType, serviceTypeID, errorDetail])


  const submitHandler = (e) => {
    serviceType.name = name
    serviceType.description = description
    serviceType.is_active = is_active

    e.preventDefault()
    dispatch(serviceTypeUpdateAction({ id: serviceType.id, name, description, is_active }))

  }
  return (
    <div>
      <FormContainer>
        <h1>Editar Tipo de Serviço</h1>
        {error && <Message>Problema {error} ao gravar novo Tipo de Serviço</Message>}
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

export { UpdateServiceTypeScreen }
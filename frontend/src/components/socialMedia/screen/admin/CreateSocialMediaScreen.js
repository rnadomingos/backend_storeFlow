import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FormContainer } from "../../../layout/FormContainer";
import { Loader } from "../../../layout/Loader";
import { Message } from "../../../layout/Message";
import { prospectionListAction } from '../../../prospection/actions/admin/prospectionListAction'
import { socialMediaCreateAction } from '../../action/admin/socialMediaCreateAction'
import { cleanErrors } from "../../action/cleanErrors";
import { SOCIAL_MEDIA_CREATE_RESET } from "../../constants/socialMediaConstants";

function CreateSocialMediaScreen({ history }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [id_prospection, setIdProspection] = useState('')

  const { error, loading, success } = useSelector(state => state.socialMediaCreateReducer)

  const { prospection } = useSelector(state => state.prospectionListReducer)

  prospection.unshift({
    id: '',
    name: ''
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(prospectionListAction())

    if (error) {
      alert(`Problema ${error} ao gravar nova mídia social`)
      dispatch(cleanErrors())
    }

    if (success) {
      history.push('/admin/social-medias')
      dispatch({ type: SOCIAL_MEDIA_CREATE_RESET })
    }

  }, [dispatch, error, success, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(socialMediaCreateAction({ name, description, id_prospection }))
  }

  return (
    <div>
      <FormContainer>
        <h1>Nova Mídia Social</h1>
        {error && <Message>Problema {error} ao gravar novo registro</Message>}
        {loading ? <Loader />
          : (
            <Form onSubmit={submitHandler}>

              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o nome do(a) vedendor(a)"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descrição da Mídia Social</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite a descrição da Mídia Social"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Prospecção</Form.Label>
                <Form.Select
                  value={id_prospection}
                  onChange={(e) => setIdProspection(e.target.value)}
                >
                  {prospection.map(prospection => (
                    <option
                      value={prospection.id}
                    >{prospection.name.toUpperCase()}</option>
                  ))}

                </Form.Select>
              </Form.Group>

              <Button
                className='btn-space'
                variant="primary"
                type="submit"
              >
                Salvar
              </Button>
              <Link to={`/admin/social-medias`}>
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


export { CreateSocialMediaScreen }
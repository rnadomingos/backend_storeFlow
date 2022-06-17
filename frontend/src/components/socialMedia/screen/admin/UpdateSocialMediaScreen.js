import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socialMediaDetailAction } from "../../action/admin/socialMediaDetailAction";
import { prospectionListAction } from "../../../prospection/actions/admin/prospectionListAction"
import { cleanErrors } from "../../action/cleanErrors"
import { SOCIAL_MEDIA_DETAIL_RESET, SOCIAL_MEDIA_UPDATE_RESET } from "../../constants/socialMediaConstants";
import { socialMediaUpdateAction } from "../../action/admin/socialMediaUpdateAction"
import { FormContainer } from "../../../layout/FormContainer";
import { Message } from "../../../layout/Message";
import { Loader } from "../../../layout/Loader";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function UpdateSocialMediaScreen({ history, match }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [id_prospection, setIdProspection] = useState('')
  const [is_active, setIsActive] = useState(true)

  const id_socialMedia = match.params.id

  const { error: errorDetail, socialMedia } = useSelector(state => state.socialMediaDetailReducer)
  const { prospection } = useSelector(state => state.prospectionListReducer)

  console.log('prosp: ', prospection);

  const { error, loading, success } = useSelector(state => state.socialMediaUpdateReducer)

  const dispatch = useDispatch()

  useEffect(() => {

    if (!socialMedia || id_socialMedia !== socialMedia.id) {
      dispatch(socialMediaDetailAction(id_socialMedia))
      dispatch(prospectionListAction())
    } else {
      setName(socialMedia.name)
      setDescription(socialMedia.description)
      setIdProspection(socialMedia.id_prospection)
      setIsActive(socialMedia.is_active)
    }

    if (errorDetail) {
      alert(`Problema ${errorDetail} ao alterar a mídia social.`)
      dispatch(cleanErrors)
    }

    if (error) {
      alert(`Problema ${error} ao alterar a mídia social.`)
      dispatch(cleanErrors)
    }

    if (success) {
      history.push('/admin/social-medias')
      dispatch({ type: SOCIAL_MEDIA_UPDATE_RESET })
      dispatch({ type: SOCIAL_MEDIA_DETAIL_RESET })
    }

  }, [dispatch, socialMedia, id_socialMedia, error, errorDetail, success, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(socialMediaUpdateAction({ id: socialMedia.id, name, description, is_active, id_prospection }))
  }

  return (
    <div>
      <FormContainer>
        <h1>Editar Mídia Social</h1>
        {error && <Message>Problema {error} ao gravar novo registro</Message>}
        {loading ? <Loader />
          : (
            <Form onSubmit={submitHandler}>

              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o nome da Mídia Social"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite a descrição da Mídia Social"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Disabled select menu</Form.Label>
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
                salvar
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

export { UpdateSocialMediaScreen }
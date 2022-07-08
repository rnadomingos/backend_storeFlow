import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FormContainer } from "../../../layout/FormContainer"
import { Loader } from "../../../layout/Loader"
import { Message } from "../../../layout/Message"
import { segmentDetailAction } from '../../actions/admin/segmentDetailAction'
import { segmentUpdateAction } from '../../actions/admin/segmentUpdateAction'
import { cleanErrors } from '../../actions/cleanErrors'
import { SEGMENT_DETAIL_RESET, SEGMENT_UPDATE_RESET } from "../../constants/segmentConstants"

function UpdateSegmentScreen({ history, match }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [is_active, setIsActive] = useState('')

  const segmentId = match.params.id

  const { error: errorDetail, segment } = useSelector(state => state.segmentDetailReducer)
  const { error, loading, success } = useSelector(state => state.segmentUpdateReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!segment || segmentId !== segment.id) {
      dispatch(segmentDetailAction(segmentId))
    } else {
      setName(segment.name)
      setDescription(segment.description)
      setIsActive(segment.is_active)
    }

    if (errorDetail) {
      alert(`Problema ${errorDetail} ao alterar o Segmento`)
      dispatch(cleanErrors)
    }

    if (error) {
      alert(`Problema ${error} ao alterar o Segmento.`)
    }

    if (success) {
      dispatch({ type: SEGMENT_UPDATE_RESET })
      dispatch({ type: SEGMENT_DETAIL_RESET })
      history.push('/admin/segments')
    }
  }, [error, errorDetail, dispatch, success, history, segment, segmentId])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(segmentUpdateAction({ id: segment.id, name, description, is_active }))
  }

  return (
    <div>
      <FormContainer>
        <h1>Editar Segmento</h1>
        {error && <Message>Problema {error} ao gravar alterar Segmento</Message>}
        {loading ? <Loader />
          : (
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o Segmento"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descrição do Tipo de Serviço</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite a Descrição do Segmento"
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
              <Link to={`/admin/segments`}>
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

export { UpdateSegmentScreen }
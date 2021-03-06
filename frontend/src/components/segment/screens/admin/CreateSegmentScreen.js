import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cleanErrors } from "../../actions/cleanErrors"
import { SEGMENT_CREATE_RESET } from "../../constants/segmentConstants"
import { segmentCreateAction } from "../../actions/admin/segmentCreateAction"
import { FormContainer } from "../../../layout/FormContainer"
import { Message } from "../../../layout/Message"
import { Loader } from "../../../layout/Loader"
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

function CreateSegmentScreen({ history }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const { error, loading, success } = useSelector(state => state.segmentCreateReducer)

  const dispatch = useDispatch()

  useEffect(() => {

    if (error) {
      alert(`Problema ${error} ao gravar novo Segmento de Vendas`)
      dispatch(cleanErrors())
    }

    if (success) {
      history.push('/admin/segments')
      dispatch({ type: SEGMENT_CREATE_RESET })
    }

  }, [dispatch, error, success, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(segmentCreateAction({ name, description }))
  }

  return (
    <div>
      <FormContainer>
        <h1>Novo Segmento</h1>
        {error && <Message>Problema {error} ao gravar novo registro</Message>}
        {loading ? <Loader />
          : (
            <Form onSubmit={submitHandler}>

              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite o nome do Segmento de Vendas"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descrição do Segmento</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Digite a descrição do Segmento de Vendas"
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


export { CreateSegmentScreen }
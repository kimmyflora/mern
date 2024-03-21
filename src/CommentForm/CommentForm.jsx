import { useState } from 'react'
import { Button, Form, Segment, } from 'semantic-ui-react'


export default function CommentForm({ handleAddPost }) {

  const [state, setState] = useState({
    caption: ''
  })


  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('caption', state.caption)
    handleAddPost(formData)
  }


  return (
    <Segment>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Form.TextArea
          className="form-control"
          name="caption"
          value={state.caption}
          placeholder="What's on your mind?"
          onChange={handleChange}
          required
        />

        <Button type="submit" className="btn">
          ADD COMMENT
        </Button>
      </Form>
    </Segment>

  );
}
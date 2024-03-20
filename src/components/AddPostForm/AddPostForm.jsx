import { useState } from 'react'
import { Button, Form, Segment, } from 'semantic-ui-react'


export default function AddPostForm({ handleAddPost }) {

  const [state, setState] = useState({
    caption: ''
  })

  const [photo, setPhoto] = useState({})

  function handleFileInput(e) {
    setPhoto(e.target.files[0])
  }

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
    formData.append('photo', photo)
    handleAddPost(formData)
  }

  const options = [
    { text: 'Restaurants', value: 'Restaurants' },
    { text: 'Services', value: 'Services' },
    { text: 'Other', value: 'Other' }
  ];
 

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
        <Form.Input
          className="form-control"
          type="file"
          name="photo"
          placeholder="upload image"
          onChange={handleFileInput}
        />

      <Form.Dropdown
       className="form-control" 
       options={options}
       value={state.businessType}
       placeholder='Select Type'
       onChange={handleFileInput}
       required
      


      />

      


        <Button type="submit" className="btn">
          ADD POST
        </Button>
      </Form>
    </Segment>

  );
}
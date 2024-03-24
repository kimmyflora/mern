import { useState } from 'react'
import { Button, Form, Segment, } from 'semantic-ui-react'



export default function AddPostForm({ handleAddPost }) {

  const [state, setState] = useState({
    caption: '',
    businessType: ''
  })

  const [photo, setPhoto] = useState({})

  function handleFileInput(e) {
    setPhoto(e.target.files[0])
  }

  function handleChange(e, target) {
    console.log(target, 'logggg')
    const val = target ? target.value : e.target.value
    const name = target ? target.name : e.target.name
    setState({
      ...state,
      [name]: val
    })
  }



  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('caption', state.caption)
    formData.append('photo', photo)
    formData.append('businessType', state.businessType)
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Form.Input
            className="form-control"
            type="file"
            name="photo"
            placeholder="upload image"
            onChange={handleFileInput}
          />
        </div>
        <Form.Dropdown
          className="form-control"
          name='businessType'
          options={options}

          placeholder='Select Type'
          onChange={handleChange}
          required
        />

        <Button type="submit" className="btn">
          ADD POST
        </Button>
      </Form>
    </Segment>

  );
}
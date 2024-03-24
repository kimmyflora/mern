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

  //async function handle submit try and catch post request to back end 
  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await fetch(`/api/posts/${post._id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + tokenService.getToken(),
        },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) {
        throw new Error('Failed to add comment');
      }
      // Reset form fields after successful submission
      setText('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };


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
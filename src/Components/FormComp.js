import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormComp = ({ handleChange, handleSubmit, text }) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <Button type="submit"> Submit</Button>
      </Form>
    </div>
  );
};

export default FormComp;

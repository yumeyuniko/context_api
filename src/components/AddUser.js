import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const AddUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter Name"></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

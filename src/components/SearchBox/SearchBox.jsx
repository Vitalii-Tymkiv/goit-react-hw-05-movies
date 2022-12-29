import PropTypes from 'prop-types';
import { Input, Button, Form } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="search"
        type="text"
        autocomplete="off"
        placeholder="Find movie..."
      />
      <Button>Find</Button>
    </Form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

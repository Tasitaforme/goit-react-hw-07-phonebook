import { ListItem, Button } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Notification from 'components/Notification/Notification';
import { deleteContact } from 'redux/operationsThunks';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <>
      {contacts &&
        (contacts.length === 0 ? (
          <Notification message="Nothing found" />
        ) : (
          <ul>
            {contacts.map(({ id, name, phone }) => {
              return (
                <ListItem key={id}>
                  <>
                    <p>{name}:</p>
                    <p>{phone}</p>
                  </>
                  <Button type="button" onClick={() => handleDelete(id)}>
                    Delete
                  </Button>
                </ListItem>
              );
            })}
          </ul>
        ))}
    </>
  );
};
export default ContactList;

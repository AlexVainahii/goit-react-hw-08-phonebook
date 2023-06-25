import { useDispatch, useSelector } from 'react-redux';
import { Container, Loader, SectionContainer } from './PhoneBook.styled';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/Contacts/operationsContact';
import { useEffect } from 'react';
import { CircleLoader } from 'react-spinners';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { P } from 'components/ContactList/ContactList.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SectionContainer>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && !error ? (
          <Loader>
            <CircleLoader
              color="blue"
              size={100}
              loading={isLoading}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </Loader>
        ) : contacts.length <= 0 ? (
          <P>No contacts in Phonebook</P>
        ) : (
          <Container>
            <Filter />
            <ContactList />
          </Container>
        )}
      </Section>
    </SectionContainer>
  );
};

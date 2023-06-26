import { Loader } from 'pages/PhoneBook.jsx/PhoneBook.styled';
import { CardContainer, CardLabel, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/Filter/filterSlice';
import { selectError, selectIsLoading } from 'redux/selectors';
import { CircleLoader } from 'react-spinners';
import Icon from '../../images/icon.png';
export const Filter = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterContacts = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <CardContainer>
      <CardLabel htmlFor="filter">Find contacts by name</CardLabel>
      <Input
        type="text"
        name="filter"
        onChange={e => {
          filterContacts(e);
        }}
      />
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
      ) : (
        <Loader
          style={{
            backgroundImage: `url(${Icon})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100px',
          }}
        />
      )}
    </CardContainer>
  );
};

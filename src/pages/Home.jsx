<<<<<<< Updated upstream
import { Container, Heading, Section } from 'components';
=======
import { Container, ExchangeForm, ExchangeInfo, Heading, Loader, Section } from 'components';
import { useSelector } from 'react-redux';
import { selectExchangeInfo, selectIsError, selectIsLoading } from 'reduxState/selertors';
>>>>>>> Stashed changes

const Home = () => {
  const exchangeInfo = useSelector(selectExchangeInfo);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Section>
      <Container>
<<<<<<< Updated upstream
        <Heading info title="What currencies do you want to exchange?🙂" />

=======
        <ExchangeForm />
        {!exchangeInfo && !isError && <Heading info title="What currencies do you want to exchange?🙂" />}
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        {isLoading && <Loader /> }
>>>>>>> Stashed changes
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;

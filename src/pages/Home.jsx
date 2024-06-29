import { Container, ExchangeForm, ExchangeInfo, Heading, Loader, Section } from 'components';
import { useSelector } from 'react-redux';
import { selectExchangeInfo, selectIsError, selectIsLoading } from 'reduxState/selertors';

const Home = () => {
  const exchangeInfo = useSelector(selectExchangeInfo);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!exchangeInfo && !isError && <Heading info title="What currencies do you want to exchange?🙂" />}
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        {isLoading && <Loader /> }
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

import PropTypes from 'prop-types';
import { LoadingContainer } from './styled';

function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <LoadingContainer>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
    </LoadingContainer>
  );
}

export default Loading;

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

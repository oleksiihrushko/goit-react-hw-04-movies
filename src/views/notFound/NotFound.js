import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const NotFound = () => {
  return (
    <div>
      404 Not found
      <br />
      <p>
        Вот <Link to="/">ссылка</Link> на главную
      </p>
    </div>
  );
};

// NotFound.propTypes = {

// }

export default NotFound;

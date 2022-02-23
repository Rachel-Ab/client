import { useEffect } from 'react';
import PropTypes from 'prop-types';

import toastr from 'toastr';

const Notification = ({ alerts }) => {
  useEffect(
    () =>
      alerts !== null &&
      alerts.length > 0 &&
      alerts.map(alert => toastr[alert.alertType](alert.msg))
  );

  return null;
};

export default Notification;

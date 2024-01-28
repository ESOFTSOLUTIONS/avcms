import PropTypes from 'prop-types';
import React from 'react';
import './Logo.scss';

export default function Logo({ dashboardUrl }) {
  const companyName = 'Bijoux';
  const companyLogo = '/logo-h.svg';

  return (
    <div className="logo">
      <a href={dashboardUrl} className="flex items-end">
        <img className="logo-image" src={companyLogo} alt={companyName} />
      </a>
    </div>
  );
}

Logo.propTypes = {
  dashboardUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'header',
  sortOrder: 10
};

export const query = `
  query Query {
    dashboardUrl: url(routeId:"dashboard")
  }
`;

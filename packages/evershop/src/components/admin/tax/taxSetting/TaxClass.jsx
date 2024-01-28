import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@components/admin/cms/Card';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import { Rates } from './Rates';

function TaxClass({ taxClass, getTaxClasses }) {

  const deleteTaxClass = async () => {
    const url = ''; // taxClass.deleteApi;
    await fetch(url, { method: 'DELETE' });
  };

  return (
    <Card.Session
      title={
        <div className="flex flex-row">
          <div className="w-6/12">{taxClass.name}</div>
          <div className="w-6/12 text-right">
            <button type="button" className="button primary uppercase" onClick={deleteTaxClass}>
              {_('Delete')}
            </button>
          </div>
        </div>
      }
    >
      <div className="divide-y border rounded border-divider">
        <div className="flex justify-start items-center border-divider mt-2">
          <div className="flex-grow px-1">
            <Rates
              rates={taxClass.rates}
              addRateApi={taxClass.addRateApi}
              getTaxClasses={getTaxClasses}
            />
          </div>
        </div>
      </div>
    </Card.Session>
  );
}

TaxClass.propTypes = {
  taxClass: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rates: PropTypes.arrayOf(
      PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        province: PropTypes.string.isRequired,
        postcode: PropTypes.string.isRequired,
        isCompound: PropTypes.bool.isRequired,
        priority: PropTypes.number.isRequired
      })
    ),
    addRateApi: PropTypes.string.isRequired
  }).isRequired,
  getTaxClasses: PropTypes.func.isRequired
};

export default TaxClass;

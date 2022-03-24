import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Airtable from 'airtable';

export const AirtableList = ({ baseId, tableName }) => {
  const [records, setRecords] = useState([])

  useEffect(() => {

    var base = new Airtable({endpointUrl: 'https://api.airtable.com', apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);  
    base(tableName).select({
      view: "Grid view"
    }).firstPage(function (err, records) {
      if (err) { console.error(err); return; }

      setRecords(records);
      console.log(records);
      return records;
    });

  }, [baseId, tableName])

  return (
    <>
    {records.map((record) => (
      <div>
        {record.get('Name')}: {record.get('Value')}
      </div>
    ))}
    </>
    
  );
};

Airtable.propTypes = {
 /**
  * The ID for the Airtable (base) to pull from 
  */
  baseId: PropTypes.string.isRequired,
 /**
  * The name of the Airtable table to pull from 
  */
  tableName: PropTypes.string.isRequired,
};

Airtable.defaultProps = {
  baseId: '',
  tableName: 'Unify'
};

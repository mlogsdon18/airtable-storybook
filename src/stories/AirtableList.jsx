import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Airtable from 'airtable';
/**
 * Primary UI component for user interaction
 */
export const AirtableList = ({ tableId, label, ...props }) => {
  const [records, setRecords] = useState([])

  useEffect(() => {

    var base = new Airtable({endpointUrl: 'https://api.airtable.com', apiKey: process.env.AIRTABLE_API_KEY}).base(tableId);  
    base('Unify').select({
      view: "Grid view"
    }).firstPage(function (err, records) {
      if (err) { console.error(err); return; }

      setRecords(records);
      console.log(records);
      return records;
    });

  }, [tableId])

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
   * The ID for the Airtable table (base) to pull from 
   */
   tableId: PropTypes.string.isRequired,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

Airtable.defaultProps = {
  tableId: '',
  label: 'Airtable'
};

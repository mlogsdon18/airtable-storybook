import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Airtable from 'airtable';

export const AirtableList = ({ baseId, tableName }) => {
  const [records, setRecords] = useState([])

  useEffect(() => {
    // Create access to the Airtable
    var base = new Airtable({endpointUrl: 'https://api.airtable.com', apiKey: process.env.AIRTABLE_API_KEY}).base(baseId);  
    
    // Select the specific table
    // For this purpose we are just selecing the first page of records which can hold up to 100 records, we will need to refactor if more are needed
    base(tableName).select({
      view: "Grid view"
    }).firstPage(function (err, records) {
      if (err) { console.error(err); return; }

      setRecords(records);
      return records;
    });

  }, [baseId, tableName])

  // Use the record.get method with the column name to display the data
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

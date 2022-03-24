import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './button.css';
import Airtable from 'airtable';
/**
 * Primary UI component for user interaction
 */
export const AirtableList = ({ primary, backgroundColor, size, label, ...props }) => {
  const [records, setRecords] = useState([])

  useEffect(() => {
    console.log('here')

    var base = new Airtable({endpointUrl: 'https://api.airtable.com', apiKey: 'keybFJbuq3xnPLGX9'}).base('appblz15LnTqipptS');  
    base('Unify').select({
      view: "Grid view"
    }).firstPage(function (err, records) {
      if (err) { console.error(err); return; }

      setRecords(records);
      console.log(records);
      return records;

    
    });
  }, [])

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
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Airtable.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

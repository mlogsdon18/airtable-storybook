# Display Airtable Data in Storybook

This project takes data from an Airtable table and outputs it within a Storybook Component.\

To update the Airtable that is referenced, you can change the API key and base ID within the AirtableList component file on line 13.

## Required

In order for this to work, you will need to add a .env file.\
The only necessary variable needed is `AIRTABLE_API_KEY` set to your Airtable API key.


## `npm run storybook`

Runs the app in the development mode within Storybook.\
Changes will be automatically updated in the browser.

## AirtableList 
This component grabs data from Airtable based on the arguments passed by the Story (baseId and tableName) and displays the "Name" and "Value" columns.


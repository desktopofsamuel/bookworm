const Airtable = require("airtable");

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

const peopleTable = base("People");

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export default async function getPosts() {
  const records = await peopleTable.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  console.log(minifiedRecords);

  return minifiedRecords;
}

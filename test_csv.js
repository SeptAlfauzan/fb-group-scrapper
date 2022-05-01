const CSV = require("./lib/csv");


// Sample data - two columns, three rows:
const data = [
    { code: "CA", name: "California" },
    { code: "TX", name: "Texas" },
    { code: "NY", name: "New York" },
];

CSV.save(data);
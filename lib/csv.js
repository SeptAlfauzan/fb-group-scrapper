const ObjectsToCsv = require('objects-to-csv-file');

class CSV {
    static save = async (obj) => {
        try {
            const csv = new ObjectsToCsv(obj);
            // Save to file:
            await csv.toDisk("./result.csv");
            // Return the CSV file as string:
            console.log(await csv.toString());
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = CSV;
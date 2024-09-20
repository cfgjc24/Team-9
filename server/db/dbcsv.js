function csvToJson(csv) {
  const lines = csv.split("\n");
  const headers = lines[0].split(",");
  const jsonArray = [];

  for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g); // Handles quotes in CSV

      if (currentLine) {
          headers.forEach((header, index) => {
              obj[header.trim()] = currentLine[index] && currentLine[index] !== 'null' ? currentLine[index].replace(/(^"|"$)/g, '').trim() : null;
          });

          jsonArray.push(obj);
      }
  }

  return jsonArray;
}


const jsonData = csvToJson(csvData);

console.log(JSON.stringify(jsonData, null, 2));

function csvToJson(csv) {
    const rows = csv.split('\n');
    const headers = rows[0].split(',');
    const jsonData = rows.slice(1).map(row => {
      const values = row.split(',');
      return headers.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
    });
  
    return jsonData;
  }
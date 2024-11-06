// json2html.js
export default function json2html(data) {
    // Extract all unique keys (column headers) from the data
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Start building the HTML table with the data-user attribute
    let html = `<table data-user="vermaayushi7572@gmail.com">`;
  
    // Add table headers
    html += "<thead><tr>";
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += "</tr></thead>";
  
    // Add table rows
    html += "<tbody>";
    data.forEach(row => {
      html += "<tr>";
      headers.forEach(header => {
        html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
      });
      html += "</tr>";
    });
    html += "</tbody></table>";
  
    // Return the generated HTML table as a string
    return html;
  }
  
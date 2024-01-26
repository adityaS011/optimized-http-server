import fs from 'fs/promises';
import { accessFile, getFileContentAtLine } from '../utils/fileUtils.js';

const DATA_PATH = './tmp/data/';

async function getData(req, res) {
  try {
    // Extracting file name and line number from request query parameters
    const fileName = req.query.n;
    const lineNumber = req.query.m;
    if (!fileName) {
      return res.status(400).send('File name (n) is required.');
    }
    // Constructing the file path based on the provided file name
    const filePath = `${DATA_PATH}${fileName}.txt`;

    try {
      await accessFile(filePath);
    } catch (error) {
      return res.status(404).send('File not found.');
    }

    let content;
    // Retrieving file content based on the presence of line number in the request
    if (lineNumber) {
      content = await getFileContentAtLine(filePath, lineNumber);
    } else {
      content = await fs.readFile(filePath, 'utf8');
    }

    return res.send(content);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send('Internal Server Error.');
  }
}

export default {
  getData,
};

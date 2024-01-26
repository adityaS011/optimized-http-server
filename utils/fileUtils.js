import fs from 'fs/promises';

async function getFileContentAtLine(filePath, lineNumber) {
  const fileContent = (await fs.readFile(filePath, 'utf8')).split('\n');
  // Returning the content of the specified line or an error message if out of range
  return fileContent[lineNumber - 1] || 'Line number out of range.';
}

async function accessFile(filePath) {
  try {
    await fs.access(filePath);
  } catch (error) {
    throw new Error('File access error');
  }
}

export { getFileContentAtLine, accessFile };

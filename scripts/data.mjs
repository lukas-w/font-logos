import fs from 'fs';
export default JSON.parse(
  fs.readFileSync(`${process.env.OUTPUT_DIR}/${process.env.FONT_NAME}.json`)
);

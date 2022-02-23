import fs from 'fs';
import express from 'express';
const router = express.Router();
import { validationResult, param } from 'express-validator';
import * as commonmark from 'commonmark';

/**
 * @route /api/steps/:param
 * @param string name of the file
 * @returns html
 */
router.get(
  '/:name',
  param('name', 'name must be string').escape(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(500).json({ msg: 'Something went wrong' });
    }

    try {
      const { name } = req.params;

      fs.readFile(`markdown/${name}.md`, 'utf-8', function (err, data) {
        const reader = new commonmark.Parser();
        const writer = new commonmark.HtmlRenderer();

        const parsed = reader.parse(data);

        const result = writer.render(parsed);
        res.status(200).send(result);
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ err: 'Server Error' });
    }
  }
);

export default router;

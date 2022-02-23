import { param, validationResult } from 'express-validator';
//Ce middleware est agnostique, n'importe quelle route qui auras un id en parametre pourra l'utiliser
export const checkReq = [
  param('id').exists().isInt().withMessage('ID should be an int'),

  function (req, res, next) {
    let errors = validationResult(req);

    console.log(errors); // se log dans le terminal

    if (!errors.isEmpty()) {
      return res.status(500).json({
        title: 'an error occured',
        error: errors.array(),
      });
    }

    next();
  },
];

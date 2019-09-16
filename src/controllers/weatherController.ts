import * as express from 'express';
import _ from 'lodash';

export const weatherController = express.Router();

weatherController.get('/:city', (req: express.Request, res: express.Response) => {
  const city: string = req.params.city;

  if (!city) {
    return res.status(400).json({
      error: true,
      messsage: 'bad request data :(',
    });
  }

  switch (_.toLower(city)) {
    case 'nyc':
      return res.json({ degree: '18C', status: 'foggy' });
    case 'stockholm':
      return res.json({ degree: '8C', status: 'windy' });
    case 'san-francisco':
      return res.json({ degree: '14C', status: 'rainy' });
    case 'tokyo':
      return res.json({ degree: '21C', status: 'sunny' });
    default:
      return res.json({
        error: true,
        messsage: 'city name not found in DB :(',
      });
  }
});

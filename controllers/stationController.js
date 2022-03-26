'use strict';
import station from '../models/stationModel';

const station_list_get = async (req, res) => {
  res.json(await station.find().populate('Connections'));
};

const station_get = async (req, res) => {
  res.json(await station.findById(req.params.id));
};

const station_post = async (req, res) => {
  console.log(req.body);
  try {
    const newStation = req.body;
    await station.create(newStation);
    res.json(newStation);
  } catch(e) {
    console.error('station controller create failed', e);
    res.json({message: e.message});
  }
}
export { station_list_get, station_get, station_post };

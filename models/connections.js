import mongoose from 'mongoose';
import connectionTypes from './connectionTypes';

const Schema = mongoose.Schema;

const connectionsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  ConnectionTypeID: { type: Schema.Types.ObjectId, ref: connectionTypes },
});

export default mongoose.model('Connections', connectionsSchema);

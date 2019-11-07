var mongoose = require('mongoose');

var DeviceConfigSchema = new mongoose.Schema({
  id: String,
  user_config_id:String,
  name:String,
  device_reg_id:String,
  email_id:String,
  mobile_no:Number,
  stop_notify:String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('device_config', DeviceConfigSchema);
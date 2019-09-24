/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.carrier.v1.AddVehicleRequest', null, global);
goog.exportSymbol('proto.carrier.v1.AddVehicleResponse', null, global);
goog.exportSymbol('proto.carrier.v1.Vehicle', null, global);
goog.exportSymbol('proto.carrier.v1.Vehicle.VehicleKind', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.carrier.v1.Vehicle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.carrier.v1.Vehicle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.carrier.v1.Vehicle.displayName = 'proto.carrier.v1.Vehicle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.carrier.v1.AddVehicleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.carrier.v1.AddVehicleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.carrier.v1.AddVehicleRequest.displayName = 'proto.carrier.v1.AddVehicleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.carrier.v1.AddVehicleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.carrier.v1.AddVehicleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.carrier.v1.AddVehicleResponse.displayName = 'proto.carrier.v1.AddVehicleResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.carrier.v1.Vehicle.prototype.toObject = function(opt_includeInstance) {
  return proto.carrier.v1.Vehicle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carrier.v1.Vehicle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.v1.Vehicle.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    personId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 3, 0),
    brandId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    modelId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    color: jspb.Message.getFieldWithDefault(msg, 6, ""),
    licensePlate: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.carrier.v1.Vehicle}
 */
proto.carrier.v1.Vehicle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carrier.v1.Vehicle;
  return proto.carrier.v1.Vehicle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carrier.v1.Vehicle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carrier.v1.Vehicle}
 */
proto.carrier.v1.Vehicle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVehicleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPersonId(value);
      break;
    case 3:
      var value = /** @type {!proto.carrier.v1.Vehicle.VehicleKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrandId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLicensePlate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.carrier.v1.Vehicle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carrier.v1.Vehicle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carrier.v1.Vehicle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.v1.Vehicle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVehicleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPersonId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getBrandId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getModelId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLicensePlate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.carrier.v1.Vehicle.VehicleKind = {
  MOTORCYCLE: 0,
  CAR: 1
};

/**
 * optional string vehicleId = 1;
 * @return {string}
 */
proto.carrier.v1.Vehicle.prototype.getVehicleid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.carrier.v1.Vehicle.prototype.setVehicleid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string personId = 2;
 * @return {string}
 */
proto.carrier.v1.Vehicle.prototype.getPersonid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.carrier.v1.Vehicle.prototype.setPersonid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional VehicleKind kind = 3;
 * @return {!proto.carrier.v1.Vehicle.VehicleKind}
 */
proto.carrier.v1.Vehicle.prototype.getKind = function() {
  return /** @type {!proto.carrier.v1.Vehicle.VehicleKind} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.carrier.v1.Vehicle.VehicleKind} value */
proto.carrier.v1.Vehicle.prototype.setKind = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string brandId = 4;
 * @return {string}
 */
proto.carrier.v1.Vehicle.prototype.getBrandid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.carrier.v1.Vehicle.prototype.setBrandid = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string modelId = 5;
 * @return {string}
 */
proto.carrier.v1.Vehicle.prototype.getModelid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.carrier.v1.Vehicle.prototype.setModelid = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string color = 6;
 * @return {string}
 */
proto.carrier.v1.Vehicle.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.carrier.v1.Vehicle.prototype.setColor = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string licensePlate = 7;
 * @return {string}
 */
proto.carrier.v1.Vehicle.prototype.getLicenseplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.carrier.v1.Vehicle.prototype.setLicenseplate = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.carrier.v1.AddVehicleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.carrier.v1.AddVehicleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carrier.v1.AddVehicleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.v1.AddVehicleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicle: (f = msg.getVehicle()) && proto.carrier.v1.Vehicle.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.carrier.v1.AddVehicleRequest}
 */
proto.carrier.v1.AddVehicleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carrier.v1.AddVehicleRequest;
  return proto.carrier.v1.AddVehicleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carrier.v1.AddVehicleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carrier.v1.AddVehicleRequest}
 */
proto.carrier.v1.AddVehicleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.carrier.v1.Vehicle;
      reader.readMessage(value,proto.carrier.v1.Vehicle.deserializeBinaryFromReader);
      msg.setVehicle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.carrier.v1.AddVehicleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carrier.v1.AddVehicleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carrier.v1.AddVehicleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.v1.AddVehicleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVehicle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.carrier.v1.Vehicle.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vehicle vehicle = 1;
 * @return {?proto.carrier.v1.Vehicle}
 */
proto.carrier.v1.AddVehicleRequest.prototype.getVehicle = function() {
  return /** @type{?proto.carrier.v1.Vehicle} */ (
    jspb.Message.getWrapperField(this, proto.carrier.v1.Vehicle, 1));
};


/** @param {?proto.carrier.v1.Vehicle|undefined} value */
proto.carrier.v1.AddVehicleRequest.prototype.setVehicle = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.carrier.v1.AddVehicleRequest.prototype.clearVehicle = function() {
  this.setVehicle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.carrier.v1.AddVehicleRequest.prototype.hasVehicle = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.carrier.v1.AddVehicleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.carrier.v1.AddVehicleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.carrier.v1.AddVehicleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.v1.AddVehicleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    vehicleId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.carrier.v1.AddVehicleResponse}
 */
proto.carrier.v1.AddVehicleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.carrier.v1.AddVehicleResponse;
  return proto.carrier.v1.AddVehicleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.carrier.v1.AddVehicleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.carrier.v1.AddVehicleResponse}
 */
proto.carrier.v1.AddVehicleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVehicleId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.carrier.v1.AddVehicleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.carrier.v1.AddVehicleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.carrier.v1.AddVehicleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.carrier.v1.AddVehicleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVehicleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string vehicleId = 1;
 * @return {string}
 */
proto.carrier.v1.AddVehicleResponse.prototype.getVehicleid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.carrier.v1.AddVehicleResponse.prototype.setVehicleid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.carrier.v1);

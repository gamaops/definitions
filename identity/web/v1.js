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

goog.exportSymbol('proto.identity.v1.SignUpLead', null, global);
goog.exportSymbol('proto.identity.v1.SignUpLeadRequest', null, global);
goog.exportSymbol('proto.identity.v1.SignUpResponse', null, global);
goog.exportSymbol('proto.identity.v1.ValidateSignUpRequest', null, global);
goog.exportSymbol('proto.identity.v1.ValidateSignUpResponse', null, global);
goog.exportSymbol('proto.identity.v1.ValidationChannel', null, global);
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
proto.identity.v1.SignUpLead = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.identity.v1.SignUpLead, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.identity.v1.SignUpLead.displayName = 'proto.identity.v1.SignUpLead';
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
proto.identity.v1.SignUpLeadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.identity.v1.SignUpLeadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.identity.v1.SignUpLeadRequest.displayName = 'proto.identity.v1.SignUpLeadRequest';
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
proto.identity.v1.SignUpResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.identity.v1.SignUpResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.identity.v1.SignUpResponse.displayName = 'proto.identity.v1.SignUpResponse';
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
proto.identity.v1.ValidateSignUpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.identity.v1.ValidateSignUpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.identity.v1.ValidateSignUpRequest.displayName = 'proto.identity.v1.ValidateSignUpRequest';
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
proto.identity.v1.ValidateSignUpResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.identity.v1.ValidateSignUpResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.identity.v1.ValidateSignUpResponse.displayName = 'proto.identity.v1.ValidateSignUpResponse';
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
proto.identity.v1.SignUpLead.prototype.toObject = function(opt_includeInstance) {
  return proto.identity.v1.SignUpLead.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.identity.v1.SignUpLead} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.identity.v1.SignUpLead.toObject = function(includeInstance, msg) {
  var f, obj = {
    signUpId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validationChannel: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cellphone: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdJobId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 8, ""),
    updatedJobId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    signedUpAt: jspb.Message.getFieldWithDefault(msg, 10, ""),
    signedUpJobId: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.identity.v1.SignUpLead}
 */
proto.identity.v1.SignUpLead.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.identity.v1.SignUpLead;
  return proto.identity.v1.SignUpLead.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.identity.v1.SignUpLead} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.identity.v1.SignUpLead}
 */
proto.identity.v1.SignUpLead.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignUpId(value);
      break;
    case 2:
      var value = /** @type {!proto.identity.v1.ValidationChannel} */ (reader.readEnum());
      msg.setValidationChannel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCellphone(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedJobId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedJobId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignedUpAt(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignedUpJobId(value);
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
proto.identity.v1.SignUpLead.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.identity.v1.SignUpLead.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.identity.v1.SignUpLead} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.identity.v1.SignUpLead.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignUpId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidationChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCellphone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedJobId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUpdatedJobId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSignedUpAt();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSignedUpJobId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string signUpId = 1;
 * @return {string}
 */
proto.identity.v1.SignUpLead.prototype.getSignUpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpLead.prototype.setSignUpId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ValidationChannel validationChannel = 2;
 * @return {!proto.identity.v1.ValidationChannel}
 */
proto.identity.v1.SignUpLead.prototype.getValidationChannel = function() {
  return /** @type {!proto.identity.v1.ValidationChannel} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.identity.v1.ValidationChannel} value */
proto.identity.v1.SignUpLead.prototype.setValidationChannel = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.identity.v1.SignUpLead.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpLead.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.identity.v1.SignUpLead.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpLead.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string cellphone = 5;
 * @return {string}
 */
proto.identity.v1.SignUpLead.prototype.getCellphone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpLead.prototype.setCellphone = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string createdAt = 6;
 * @return {string}
 */
proto.identity.v1.SignUpLead.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpLead.prototype.setCreatedAt = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string createdJobId = 7;
 * @return {string}
 */
proto.identity.v1.SignUpLead.prototype.getCreatedJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpLead.prototype.setCreatedJobId = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string updatedAt = 8;
 * @return {string}
 */
proto.identity.v1.SignUpLead.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpLead.prototype.setUpdatedAt = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string updatedJobId = 9;
 * @return {string}
 */
proto.identity.v1.SignUpLead.prototype.getUpdatedJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpLead.prototype.setUpdatedJobId = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string signedUpAt = 10;
 * @return {string}
 */
proto.identity.v1.SignUpLead.prototype.getSignedUpAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpLead.prototype.setSignedUpAt = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string signedUpJobId = 11;
 * @return {string}
 */
proto.identity.v1.SignUpLead.prototype.getSignedUpJobId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpLead.prototype.setSignedUpJobId = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
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
proto.identity.v1.SignUpLeadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.identity.v1.SignUpLeadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.identity.v1.SignUpLeadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.identity.v1.SignUpLeadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    signUpLead: (f = msg.getSignUpLead()) && proto.identity.v1.SignUpLead.toObject(includeInstance, f)
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
 * @return {!proto.identity.v1.SignUpLeadRequest}
 */
proto.identity.v1.SignUpLeadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.identity.v1.SignUpLeadRequest;
  return proto.identity.v1.SignUpLeadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.identity.v1.SignUpLeadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.identity.v1.SignUpLeadRequest}
 */
proto.identity.v1.SignUpLeadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.identity.v1.SignUpLead;
      reader.readMessage(value,proto.identity.v1.SignUpLead.deserializeBinaryFromReader);
      msg.setSignUpLead(value);
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
proto.identity.v1.SignUpLeadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.identity.v1.SignUpLeadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.identity.v1.SignUpLeadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.identity.v1.SignUpLeadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignUpLead();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.identity.v1.SignUpLead.serializeBinaryToWriter
    );
  }
};


/**
 * optional SignUpLead signUpLead = 1;
 * @return {?proto.identity.v1.SignUpLead}
 */
proto.identity.v1.SignUpLeadRequest.prototype.getSignUpLead = function() {
  return /** @type{?proto.identity.v1.SignUpLead} */ (
    jspb.Message.getWrapperField(this, proto.identity.v1.SignUpLead, 1));
};


/** @param {?proto.identity.v1.SignUpLead|undefined} value */
proto.identity.v1.SignUpLeadRequest.prototype.setSignUpLead = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.identity.v1.SignUpLeadRequest.prototype.clearSignuplead = function() {
  this.setSignUpLead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.identity.v1.SignUpLeadRequest.prototype.hasSignuplead = function() {
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
proto.identity.v1.SignUpResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.identity.v1.SignUpResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.identity.v1.SignUpResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.identity.v1.SignUpResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signUpId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.identity.v1.SignUpResponse}
 */
proto.identity.v1.SignUpResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.identity.v1.SignUpResponse;
  return proto.identity.v1.SignUpResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.identity.v1.SignUpResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.identity.v1.SignUpResponse}
 */
proto.identity.v1.SignUpResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignUpId(value);
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
proto.identity.v1.SignUpResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.identity.v1.SignUpResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.identity.v1.SignUpResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.identity.v1.SignUpResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignUpId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string signUpId = 1;
 * @return {string}
 */
proto.identity.v1.SignUpResponse.prototype.getSignUpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.identity.v1.SignUpResponse.prototype.setSignUpId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
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
proto.identity.v1.ValidateSignUpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.identity.v1.ValidateSignUpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.identity.v1.ValidateSignUpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.identity.v1.ValidateSignUpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    signUpId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validationCode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.identity.v1.ValidateSignUpRequest}
 */
proto.identity.v1.ValidateSignUpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.identity.v1.ValidateSignUpRequest;
  return proto.identity.v1.ValidateSignUpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.identity.v1.ValidateSignUpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.identity.v1.ValidateSignUpRequest}
 */
proto.identity.v1.ValidateSignUpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignUpId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidationCode(value);
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
proto.identity.v1.ValidateSignUpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.identity.v1.ValidateSignUpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.identity.v1.ValidateSignUpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.identity.v1.ValidateSignUpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignUpId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidationCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string signUpId = 1;
 * @return {string}
 */
proto.identity.v1.ValidateSignUpRequest.prototype.getSignUpId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.identity.v1.ValidateSignUpRequest.prototype.setSignUpId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string validationCode = 2;
 * @return {string}
 */
proto.identity.v1.ValidateSignUpRequest.prototype.getValidationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.identity.v1.ValidateSignUpRequest.prototype.setValidationCode = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
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
proto.identity.v1.ValidateSignUpResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.identity.v1.ValidateSignUpResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.identity.v1.ValidateSignUpResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.identity.v1.ValidateSignUpResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, false),
    identityToken: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.identity.v1.ValidateSignUpResponse}
 */
proto.identity.v1.ValidateSignUpResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.identity.v1.ValidateSignUpResponse;
  return proto.identity.v1.ValidateSignUpResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.identity.v1.ValidateSignUpResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.identity.v1.ValidateSignUpResponse}
 */
proto.identity.v1.ValidateSignUpResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityToken(value);
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
proto.identity.v1.ValidateSignUpResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.identity.v1.ValidateSignUpResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.identity.v1.ValidateSignUpResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.identity.v1.ValidateSignUpResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIdentityToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.identity.v1.ValidateSignUpResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.identity.v1.ValidateSignUpResponse.prototype.setSuccess = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string identityToken = 2;
 * @return {string}
 */
proto.identity.v1.ValidateSignUpResponse.prototype.getIdentityToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.identity.v1.ValidateSignUpResponse.prototype.setIdentityToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.identity.v1.ValidationChannel = {
  email: 0,
  cellphone: 1
};

goog.object.extend(exports, proto.identity.v1);

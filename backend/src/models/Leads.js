const { Schema, model } = require("mongoose");

const leadSchema = new Schema(
  {
    fecha: {
      type: Date,
      default: Date.now
    },
    nick: {
      type: String,
      unique: true
    },
    nombre: String,
    tel: Number,
    mail: String,
    medio: String,
    preg: String,
    interes: String,
    seguimiento: String,
    nomseg: String,
    llegocita: String,
    valinicial: String,
    tratamiento: String,
    desctrat: String,
    cupon: String,
    desccupon: String,
    comentario: String
  },
  {
    timestamps: true
  }
);

module.exports = model("Lead", leadSchema);

const mongoose = require("mongoose");
const cakeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please add name "],
    },

    cakeImage: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    cakePrice: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cakes", cakeSchema);

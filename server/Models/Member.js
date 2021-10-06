const mongoose = require('mongoose');
const validator = require('validator');

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is empty'],
  },

  gradYear: {
    type: Number,
    trim: true,
    required: [true, 'Graduation Year is Required'],
  },

  branch: {
    type: String,
    required: [true, 'Branch is Required'],
  },

  socialHandles: {
    github: {
      type: String,
      trim: true,
    },

    linkedIn: {
      type: String,
      trim: true,
    },

    instagram: {
      type: String,
      trim: true,
    },

    facebook: {
      type: String,
      trim: true,
    },

    twitter: {
      type: String,
      trim: true,
    },

    codeForces: {
      type: String,
      trim: true,
    },

    codeChef: {
      type: String,
      trim: true,
    },

    hackerRank: {
      type: String,
      trim: true,
    },

    gfg: {
      type: String,
      trim: true,
    },
  },

  rollNo: {
    type: Number,
    required: true,
  },

  personalEmail: {
    type: String,
    required: true,
    unique: true,
    sparse: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },

  collegeEmail: {
    type: String,
    required: true,
    unique: true,
    sparse: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
});

MemberSchema.set('timestamps', true);

module.exports = Member = mongoose.model('Member', MemberSchema);

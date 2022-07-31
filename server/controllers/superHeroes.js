const superHero = require('../models/superHeroes');
const ImageModel = require('../models/image');
const fs = require('fs')

const getAllHeroes = async (req, res) => {
  let totalPages = await superHero.estimatedDocumentCount() / 5;
  totalPages = Math.ceil(totalPages);
  const page = +req.query.page || 1;
  const skip = (page - 1) * 5;
  const data = await superHero.find({}).limit(5).skip(skip);
  res.status(201).json({data, totalPages});
};

const createHero = async (req, res) => {
  const img = [];
  req.files.forEach(item => {
    item.path = `http://localhost:5500/${item.path}`;
    const createImages = new ImageModel({
      filename: item.filename,
      path: item.path,
    });
    img.push(createImages);
  });
  req.body.Images = img;
  const data = await superHero.create(req.body);
  res.status(201).json({data});
};

const getHero = async (req, res) => {
  const {id: heroID} = req.params;
  const data = await superHero.findOne({_id: heroID});
  if (!data) {
    return res.status(404).json({msg: `no superHero with id : ${heroID}`});
  }
  res.status(200).json({data});
};

const updateHero = async (req, res) => {
  const {id: heroID} = req.params;
  const hero = await superHero.findOne({_id: heroID});
  const img = hero.Images;
  req.files.forEach(item => {
    item.path = `http://localhost:5500/${item.path}`;
    const createImages = new ImageModel({
      filename: item.filename,
      path: item.path,
    });
    img.push(createImages);
  });
  const filterEmptyString = Object.keys(req.body).reduce((acc, key) => (req.body[key].length <= 0 ? acc : {
    ...acc,
    [key]: req.body[key]
  }), {});
  filterEmptyString.Images = await img;
  const data = await superHero.findOneAndUpdate({_id: heroID}, filterEmptyString, {
    new: true, runValidators: true
  });
  if (!data) {
    return res.status(404).json({msg: `no superHero with id : ${heroID}`});
  }
  res.status(200).json({data});
};

const deleteImage = async (req, res) => {
  const {id: heroID, filename: name} = req.params;
  await superHero.findOneAndUpdate(
    {_id: heroID},
    {$pull: {Images: {filename: name}}},
  );
  const data = await superHero.findOne({_id: heroID});
  return res.status(200).json({data});
};

const deleteHero = async (req, res) => {
  const {id: heroID} = req.params;
  const data = await superHero.findByIdAndDelete({_id: heroID});
  if (!data) {
    return res.status(404).json({msg: `no superHero with id : ${heroID}`});
  }
  res.status(200).json({data});
};


module.exports = {
  getAllHeroes, createHero, getHero, updateHero, deleteHero, deleteImage
};
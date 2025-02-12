import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true,
  },
  description : {
    type : String,
    required : true,
  },
  productImage : {
    typeof : String
  },
  price : {
    required : true,
    typeof : Number,
    default : 0
  },
  stock : {
    default : 0,
    type : Number,
  },
  category : {
    typeof : mongoose.Schema.Types,ObjectId,
    ref : 'Category',
    required : true
  }, 
  owner : {
    typeof : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  }
},{timestamps : true});

export const Product = mongoose.model('Product',productSchema);

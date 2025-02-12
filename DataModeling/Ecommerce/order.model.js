import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId : {
    typeof : mongoose.Schema.Types.ObjectId,
    ref : 'Product'
  },
  quantity : {
    typeof : Number,
    required : true
  }
});

const orderSchema = new mongoose.Schema({
  orderPrice : {
    typeof : Number,
    required : true
  },
  customer : {
    typeof : mongoose.Schema.Types.ObjectId,
    res : 'User'
  },
  orderItem : {
    typeof : [orderItem]
  },
  address : {
    typeof : String,
    required : true
  },
  orderStatus : {
    typeof : String,
    enum: ["PENDING","CANCELLED","DELIVERED"],
    default : "PENDING"
  }
},{timestamps : true});

export const Order = mongoose.model('Order',orderSchema);

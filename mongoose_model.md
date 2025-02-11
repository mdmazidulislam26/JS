## basic mongoose model
npm i mongoose </br>
```javascript 
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username:{
    typeof : String,
    required : true,
    lowercase : true
  },
  email : {
    typeof : String,
    required : true,
    unique : true,
    lowercase : true
  },
  password  : {
    typeof : true,
    required : [true,"password is required"]
  }
});

export const User = mongoose.model("User",userSchema);

```

---

```javascript

import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  content : {
    typeof : String,
    required : true,
  },
  complete : {
    typeof : Boolean,
    default : false,
  },
  createdBy :{
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  subTodos : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "SubTodo"
    }
  ]
},{timestamps : true});

export const Todo = mongoose.model("Todo",todoSchema);

```

---

```javascript 
import mongoose from 'mongoose';

const subtodoSchema = new mongoose.Schema({
  content : {
    typeof : String,
    required : true,
  },
  complete : {
    typeof : Boolean,
    default : false,
  },
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
  }
},{timestamps : true});

export const SubTodo = mongoose.model("SubTodo",subtodoSchema)

```

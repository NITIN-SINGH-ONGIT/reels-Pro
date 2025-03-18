import mongoose, { model,Schema,models } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  email : string;
  password : string;
  _id?: mongoose.Types.ObjectId; // _id is optional when creating a new user
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>( 
  {
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
  },
  {timestamps: true}
)

userSchema.pre("save",async function(next){ // pre save hook to hash the password before saving
   if(this.isModified("password")){
     this.password = await bcrypt.hash(this.password, 10);
   }
   next();
});

const User = models?.User || model<IUser>("User", userSchema); // if the model already exists, use it, otherwise create a new model
export default User;
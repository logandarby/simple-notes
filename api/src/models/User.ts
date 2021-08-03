import {
  getModelForClass,
  modelOptions,
  prop,
  ReturnModelType,
} from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true, collection: "users" } })
class UserClass {
  // @prop({ required: true })
  // public firstName: string;

  // @prop({ required: true })
  // public lastName: string;

  @prop({ required: true })
  public password: string;

  @prop({ required: true })
  public username: string;
}

const User = getModelForClass(UserClass);
export default User;

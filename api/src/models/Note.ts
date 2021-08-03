import {
  getModelForClass,
  modelOptions,
  prop,
  ReturnModelType,
} from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true, collection: "notes" } })
class NoteClass {
  @prop({ required: true })
  public title: string;

  @prop({ required: true })
  public contents: string;

  @prop({ required: true })
  public userId: string;
}

const Note = getModelForClass(NoteClass);
export default Note;

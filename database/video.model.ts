import { model, models, Schema, Document } from "mongoose";

export interface IVideo extends Document {
  user: Schema.Types.ObjectId;
  images: Schema.Types.Array;
  audios: Schema.Types.Array;
  scripts: Schema.Types.Array;
  videos: Object;
  title: string;
  introImg: string;
  createdAt: Date;
}

const VideoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  images: {
    type: Schema.Types.Array,
  },
  audios: {
    type: Schema.Types.Array,
  },
  scripts: {
    type: Schema.Types.Array,
  },
  title: {
    type: String,
  },
  introImg: {
    type: String,
  },
  videos: {
    type: Object,
  },
  createdAt: { type: Date, default: Date.now },
});
const Video = models.Video || model("Video", VideoSchema);
export default Video;

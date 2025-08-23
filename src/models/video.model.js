import mongoose, { Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videofile: {
      type: String,  // Cloudinary video URL
      required: true
    },
    thumbnail: {   // spelling fix: "thumbnail"
      type: String,
      required: true
    },
    owner: {
      type: Types.ObjectId,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      required: true   // ✅ in JS it's `true` not `True`
    },
    description: {
      type: String,
      required: true
    },
    duration: {
      type: String,   // Cloudinary duration info
      required: true
    },
    views: {
      type: Number,
      default: 0
    },
    isPublished: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

// Plugin for aggregation pagination
videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);

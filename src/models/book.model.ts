import mongoose, { Schema, Document } from "mongoose";
import { IBook } from "../interfaces/book.interfaces";
import { title } from "process";

export interface IBookDocument extends IBook, Document { }

const BookSchema: Schema = new Schema<IBookDocument>(
  {
    title: { type: String, required: true, unique: true, trim: true },
    author: { type: String, required: true, trim: true },
    publishedYear: { type: Number },
    genre: { type: String },
    available: { type: Boolean, default: true }
  },
  { timestamps: true }
);

BookSchema.index({ title: 1 }, { unique: true });

export const Book = mongoose.model<IBookDocument>("Book", BookSchema);
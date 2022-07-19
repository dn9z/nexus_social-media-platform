import multer from "multer";

export default multer({
  dest: "./uploads", // location for where our files will be saved
  limits: { fileSize: 1000000 }, // 20000 bytes is 20kb
  //fileFilter // limit the type of files the user can upload
});

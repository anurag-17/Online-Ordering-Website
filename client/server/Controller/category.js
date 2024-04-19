const Category = require("../Model/Category");
const validateMongoDbId = require("../Utils/validateMongodbId");
const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const multer = require('multer');
const dotenv=require('dotenv')
dotenv.config();


// Configure the AWS region
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.REGION,
    
});

// Create an S3 service object
const s3 = new AWS.S3();

// Define the file filter function for multer
const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
};

// Configure multer with file filter function
const upload = multer({ fileFilter }).single('ProfileImage');

// Export the upload middleware
exports.upload = upload;

exports.createCategory = async (req, res, next) => {
    try {
        const { title } = req.body;

        // Call multer middleware to handle file upload
        upload(req, res, async (error) => {
            // Access the uploaded file from req.file
            const ProfileImage = req.file;
            if (!ProfileImage) {
                return res.status(400).json({ error: "Please upload an image" });
            }

            // Ensure that ProfileImage.buffer is accessible
            if (!ProfileImage.buffer || ProfileImage.buffer.length === 0) {
                return res.status(400).json({ error: 'Uploaded file buffer is empty or undefined' });
            }

            // Upload image to S3
            const bucketName =process.env.BUCKET;
            const uploadParams = {
                Bucket: bucketName,
                Key: `profile-images/${title}-${Date.now()}`,
                Body: ProfileImage.buffer,
                ContentType: ProfileImage.mimetype
            };
            const s3UploadResponse = await s3.upload(uploadParams).promise();
            console.log(s3UploadResponse.Location);
            const imageUrl = s3UploadResponse.Location;

            // Create a new dietary with the image URL
            const Categorys = new Category({
                title: title,
                ProfileImage: imageUrl
            });

            // Save the dietary to the database
            const categorysss = await Categorys.save();


            // Send response with the created dietary
            res.status(201).json(categorysss);
        });
    } catch (error) {
        next(error);
    }
};



// Get all categories with pagination and search filter
exports.getAllCategories = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search } = req.query;

    const currentPage = parseInt(page, 10);
    const itemsPerPage = parseInt(limit, 10);

    let categoryQuery = Category.find();

    if (search) {
      categoryQuery = categoryQuery.where('title').regex(new RegExp(search, 'i'));
    }

    const totalItems = await Category.countDocuments(categoryQuery);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const skip = (currentPage - 1) * itemsPerPage;
    const cuisines = await categoryQuery.skip(skip).limit(itemsPerPage);

    res.json({
      totalItems,
      totalPages,
      currentPage,
      cuisines,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single category by ID
exports.getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ error: "Cuisens not found" });
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
};

// Update a category by ID
exports.updateCategoryById = async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!category) {
      return res.status(404).json({ error: "Cuisens not found" });
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
};

// Delete a category by ID
exports.deleteCategoryById = async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ error: "Cuisens not found" });
    }
    res.json({ message: "Cuisens deleted successfully" });
  } catch (error) {
    next(error);
  }
};

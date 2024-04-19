const MenuItem = require('../Model/MenuItem');
const validateMongoDbId = require("../Utils/validateMongodbId");
const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const multer = require('multer');
const dotenv = require('dotenv')
dotenv.config()

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

// Export the upload middleware
exports.upload = upload;

// exports.createDishType = async (req, res, next) => {
//     try {
//         const { title } = req.body;

//         // Call multer middleware to handle file upload
//         upload(req, res, async (error) => {
//             // Access the uploaded file from req.file
//             const ProfileImage = req.file;
//             if (!ProfileImage) {
//                 return res.status(400).json({ error: "Please upload an image" });
//             }

//             // Ensure that ProfileImage.buffer is accessible
//             if (!ProfileImage.buffer || ProfileImage.buffer.length === 0) {
//                 return res.status(400).json({ error: 'Uploaded file buffer is empty or undefined' });
//             }

//             // Upload image to S3
//             const bucketName = process.env.BUCKET;
//             const uploadParams = {
//                 Bucket: bucketName,
//                 Key: `profile-images/${title}-${Date.now()}`,
//                 Body: ProfileImage.buffer,
//                 ContentType: ProfileImage.mimetype
//             };
//             const s3UploadResponse = await s3.upload(uploadParams).promise();
//             console.log(s3UploadResponse.Location);
//             const imageUrl = s3UploadResponse.Location;

//             // Create a new dietary with the image URL
//             const DishTypes = new DishType({
//                 title: title,
//                 ProfileImage: imageUrl
//             });
//             // Save the dietary to the database
//             const Dish = await DishTypes.save();
//             // Send response with the created dietary
//             res.status(201).json(Dish);
//         });
//     } catch (error) {
//         next(error);
//     }
// };


// Create a new menu item

exports.createMenuItem = async (req, res, next) => {
  try {
    const { name, description, price, weight, portion_Size, Ingredients, Heating_Instruction, List_of_Ingredients, Cuisines_id, Dishtype_id, Dietary_id, spice_level_id,  chef_id } = req.body;

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
      const bucketName = process.env.BUCKET;
      const uploadParams = {
        Bucket: bucketName,
        Key: `profile-images/${name}-${Date.now()}`,
        Body: ProfileImage.buffer,
        ContentType: ProfileImage.mimetype
      };
      const s3UploadResponse = await s3.upload(uploadParams).promise();
      console.log(s3UploadResponse.Location);
      const imageUrl = s3UploadResponse.Location;

      // Create a new menu item with the image URL
      const menuItem = new MenuItem({
        name,
        description,
        price,
        weight,
        portion_Size,
        Ingredients,
        Heating_Instruction,
        List_of_Ingredients,
        Cuisines_id,
        Dishtype_id,
        Dietary_id,
        spice_level_id,
        chef_id,
        ProfileImage: imageUrl
      });
      // Save the menu item to the database
      const newMenuItem = await menuItem.save();
      // Send response with the created menu item
      res.status(201).json(newMenuItem);
    });
  } catch (error) {
    next(error);
  }

}


// Get all menu items 
exports.getAllMenuItems = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search } = req.query;

    const currentPage = parseInt(page, 10);
    const itemsPerPage = parseInt(limit, 10);

    let menuItemQuery = MenuItem.find().populate("chef_id").populate("Cuisines_id").populate("Dishtype_id").populate("Dietary_id").populate("spice_level_id");

    if (search) {
      menuItemQuery = menuItemQuery.or([
        { name: { $regex: new RegExp(search, 'i') } },
        { category: { $regex: new RegExp(search, 'i') } },
        { description: { $regex: new RegExp(search, 'i') } },
      ]);
    }

    const totalItems = await MenuItem.countDocuments(menuItemQuery);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const skip = (currentPage - 1) * itemsPerPage;
    const menuItems = await menuItemQuery.skip(skip).limit(itemsPerPage);

    res.json({
      totalItems,
      totalPages,
      currentPage,
      menuItems
    });
  } catch (error) {
    next(error);
  }
};

// Get a single menu item by ID
exports.getMenuItemById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const menuItem = await MenuItem.findById(id).populate("chef_id").populate("Cuisines_id").populate("Dishtype_id").populate("Dietary_id").populate("spice_level_id");
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    next(error);
  }
};

// Update a menu item by ID
exports.updateMenuItemById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const menuItem = await MenuItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    next(error);
  }
};

// Delete a menu item by ID
exports.deleteMenuItemById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const menuItem = await MenuItem.findByIdAndDelete(id);
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    next(error);
  }
};
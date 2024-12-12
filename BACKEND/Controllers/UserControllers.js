const User = require("../Model/UserModel"); // Import the User model

// Get all users
const getAllUsers = async (req, res, next) => {
    let users; // Variable to hold data

    try {
        users = await User.find(); 
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" });
    }

    // If no users are found
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "Users not found" });
    }

    // Return all users
    return res.status(200).json({ users });
};

// Add a user
const addUsers = async (req, res, next) => {
    const { name, age, address } = req.body;

    let user;
    try {
        user = new User({ name, age, address }); // Create a new user object
        await user.save(); // Save user to database
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" });
    }

    // If user creation fails
    if (!user) {
        return res.status(400).json({ message: "Unable to add user" });
    }

    // Return created user
    return res.status(201).json({ user });
};

// Get user by ID
const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;
    try {
        user = await User.findById(id); // Retrieve user by ID
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" });
    }

    // not available user
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
};

//update user details
const updateUser = async(req,res,next) => {
    const id = req.params.id;
    const {name,gmail,age,address} = req.body;

    let users;

    try{
        users = await User.findByIdAndUpdate(id,
            {name:name,gmail:gmail,age:age,address:address});
            users = await users.save();
    }
    catch(err){
        console.log(err); 
    }

    if (!users) {
        return res.status(404).json({ message: "Unable to update user details" });
    }
    return res.status(200).json({ users });
};

//Delete user details
const deleteUser = async(req,res,next)=>{
    const id = req.params.id;

    let user;

    try {user = await User.findByIdAndDelete(id)
    } catch(err){
        console.log(err); 
    }

    if (!user) {
        return res.status(404).json({ message: "Unable to delete" });
    }
    return res.status(200).json({ user });


};

// Export functions
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser; 

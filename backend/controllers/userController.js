import User from '../models/User.js'

export const createUser = async(req,res) =>{
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save();
        res.status(200).json({success:true, message: 'Successfully created', data:savedUser})
        
    } catch (error) {
        res.status(500).json({
            success :false,
            message:'Failed to create. Try Again',
        })
    }
}

//update User
export const updateUser = async(req, res) => {
    const id = req.params.id
    try {
       const updatedUser = await User.findByIdAndUpdate(id,{
        $set: req.body
       },{new:true})
       res.status(200).json({success:true, message: 'Successfully updated', data: updateUser});
    } catch (error) {
        res.status(500).json({success:false, message: 'failed to updated'})
    }
}
//delete
export const deleteUser = async(req, res) => {
    const id = req.params.id
    try {
       const deletedUser = await User.findByIdAndDelete(id)
       res.status(200).json({success:true, message: 'Successfully Deleted'});
    } catch (error) {
        res.status(500).json({success:false, message: 'failed to Delete'})
    }
}
//getSingle User
export const getSingleUser = async(req, res) => {
    

        const id = req.params.id
        try {
           const user = await User.findById(id)
           res.status(200).json({success:true, message: 'Successfully  find', data: user, });
        } catch (error) {
            res.status(500).json({success:false, message: 'failed to  find'})
        }
        
   
}

//get all User
export const getAllUser = async(req, res) => {
    
    try {
        const users = await User.find({})
        res.status(200).json({success:true, message:'Successfully find all', data: users})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}

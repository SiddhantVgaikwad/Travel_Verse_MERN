import Tour from '../models/Tour.js'

export const createTour = async(req,res) =>{
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save();
        res.status(200).json({success:true, message: 'Successfully created', data:savedTour})
        
    } catch (error) {
        res.status(500).json({
            success :false,
            message:'Failed to create. Try Again',
        })
    }
}

//update tour
export const updateTour = async(req, res) => {
    const id = req.params.id
    try {
       const updatedTour = await Tour.findByIdAndUpdate(id,{
        $set: req.body
       },{new:true})
       res.status(200).json({success:true, message: 'Successfully updated', data: updateTour});
    } catch (error) {
        res.status(500).json({success:false, message: 'failed to updated'})
    }
}
//delete
export const deleteTour = async(req, res) => {
    const id = req.params.id
    try {
       const deletedTour = await Tour.findByIdAndDelete(id)
       res.status(200).json({success:true, message: 'Successfully Deleted'});
    } catch (error) {
        res.status(500).json({success:false, message: 'failed to Delete'})
    }
}
//getSingle tour
export const getSingleTour = async(req, res) => {
    

        const id = req.params.id
        try {
           const tour = await Tour.findById(id).populate('reviews')
           res.status(200).json({success:true, message: 'Successfully  find', data: tour });
        } catch (error) {
            res.status(500).json({success:false, message: 'failed to  find'})
        }
        
   
}

//get all tour
export const getAllTour = async(req, res) => {
    const page = parseInt(req.query.page);
 
    try {
        const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8)
        res.status(200).json({success:true, count:tours.length, message:'Successfully find all', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}


//get tour by search

export const getTourBySearch = async (req,res) => {

    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {
        const tours = await Tour.find({city : new RegExp(req.query.city, 'i')}).populate('reviews')
        res.status(200).json({success:true,  message:'Successfully find all', data: tours})
        
       
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
       
        
    }

}



//get feature tour
export const getFeatureTour = async(req, res) => {
    const page = parseInt(req.query.page);
    
    try {
        const tours = await Tour.find({featured:true}).populate('reviews').limit(8)
        res.status(200).json({success:true, message:'Successfully find all', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}


export const getBeachTour = async(req, res) => {
    const page = parseInt(req.query.page);
    
    try {
        const tours = await Tour.find({beach:true}).populate('reviews')
        res.status(200).json({success:true, message:'Successfully find all', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}

export const getWildTour = async(req, res) => {
    const page = parseInt(req.query.page);
    
    try {
        const tours = await Tour.find({wild:true}).populate('reviews')
        res.status(200).json({success:true, message:'Successfully find all', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}
export const getSiTour = async(req, res) => {
    const page = parseInt(req.query.page);
    
    try {
        const tours = await Tour.find({si:true}).populate('reviews')
        res.status(200).json({success:true, message:'Successfully find all', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}
export const getDevTour = async(req, res) => {
    const page = parseInt(req.query.page);
    
    try {
        const tours = await Tour.find({dev:true}).populate('reviews')
        res.status(200).json({success:true, message:'Successfully find all', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}
export const getOldTour = async(req, res) => {
    const page = parseInt(req.query.page);
    
    try {
        const tours = await Tour.find({old:true}).populate('reviews')
        res.status(200).json({success:true, message:'Successfully find all', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}
export const getCulTour = async(req, res) => {
    const page = parseInt(req.query.page);
    
    try {
        const tours = await Tour.find({cul:true}).populate('reviews')
        res.status(200).json({success:true, message:'Successfully find all', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}
export const getHoneyTour = async(req, res) => {
    const page = parseInt(req.query.page);
    
    try {
        const tours = await Tour.find({honey:true}).populate('reviews')
        res.status(200).json({success:true, message:'Successfully find all', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}
export const getHillTour = async(req, res) => {
    const page = parseInt(req.query.page);
    
    try {
        const tours = await Tour.find({hill:true}).populate('reviews')
        res.status(200).json({success:true, message:'Successfully find all', data: tours})
    } catch (error) {
        res.status(404).json({success:false, message: 'failed'})
    }
}

export const getTourCount = async(req,res) =>{

    try { 
        
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success:true, message:'Successfully find all', data:tourCount})
    } catch (error) {
        
        res.status(500).json({success:false, message: 'failed'})
        
    }

}
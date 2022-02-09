// package of express-async-handler (new concept)
const asyncHandler = require('express-async-handler');

// @desc    Get goals  
// @route   GET /api/goals
// @access  Private
exports.getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals to write in app'});
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
exports.setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400);
        throw new Error('Please add a text field');
    }
    res.status(200).json({message:'Set goal'});
});

// @desc    Update goal  
// @route   PUT /api/goals/:id
// @access  Private
exports.updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Update goals ${req.params.id}`});
});

// @desc    Delete goals  
// @route   DELETE /api/goals/:id
// @access  Private
exports.deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`});
});

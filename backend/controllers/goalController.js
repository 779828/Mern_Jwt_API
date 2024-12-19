// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoals = (req, res) => {
  res.status(200).json({ message: "Set goals" });
};

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
};

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};

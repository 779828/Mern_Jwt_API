const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

const setGoals = (req, res) => {
  res.status(200).json({ message: "Set goals" });
};

const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
};

const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};

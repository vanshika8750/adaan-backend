const User = require('../models/User');

exports.getCurrentProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.updateUserProfile = async (req, res) => {
  const { phone, name, email, pastExperience, skillSets, education } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email; 
    user.pastExperience = pastExperience || user.pastExperience;
    user.skillSets = skillSets || user.skillSets;
    user.education = education || user.education;
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Error updating profile' });
  }
};

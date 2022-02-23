import Category from '../../models/Category.js';

/**
 * @route GET api/categories/:id
 */
export const getOneCategory = async function (req, res) {
  //
  try {
    const categoryInstance = await Category();
    const category = await categoryInstance.findOne({
      where: {
        id: req.params.id,
      },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).json(category);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
};

export default getOneCategory;

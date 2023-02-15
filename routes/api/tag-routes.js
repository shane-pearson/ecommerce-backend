const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    // find all categories with its associated Products
    const categoryData = await Tag.findAll({
      include: [
        {model: Product, ProductTag}
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }  
});

// router.get('/', async (req, res) => {
//   try {
//     const categoryData = await Tag.findAll({
//       include: [{ model: Product, ProductTag}],
//     });
//     if(!categoryData) {
//       res.status(404).json({message: "No tags in the database!"});
//     }
//     res.status(200).json(categoryData);
//   } catch (error) {
//     res.status(500).json(error)
//   }
//   // find all tags
//   // be sure to include its associated Product data
// });

// router.get('/:id', async (req, res) => {
//    try {
//     const categoryData = await Tag.findByPk(req.params.id, {
//       include: [{ model: Product, ProductTag }],
//     });

//     if (!categoryData) {
//       res.status(404).json({ message: 'No Tag found with that id!' });
//       return;
//     }

//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
//   // find a single tag by its `id`
//   // be sure to include its associated Product data
// });

// router.post('/', (req, res) => {
//   // create a new tag
// });

// router.put('/:id', (req, res) => {
//   // update a tag's name by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value
// });

module.exports = router;

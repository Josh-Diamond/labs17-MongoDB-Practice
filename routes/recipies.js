const express = require("express");
const router = express.Router();
const Recipie = require("../models/recipie");

// Getting all
router.get("/", async (req, res) => {
  try {
    const recipies = await Recipie.find();
    res.json(recipies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getRecipie, (req, res) => {
    res.json(res.recipie)
});

// Creating One
router.post("/", async (req, res) => {
  const recipie = new Recipie({
    type: req.body.type,
    category: req.body.category,
    title: req.body.title,
    prep_time: req.body.prep_time,
    cook_time: req.body.cook_time,
    ingredients: req.body.ingredients,
    directions: req.body.directions,
    image_url: req.body.image_url,
    comments: req.body.comments
  });

  try {
    const newRecipie = await recipie.save();
    res.status(201).json(newRecipie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.patch("/:id", getRecipie, async (req, res) => {
    if (req.body.type != null) {
        res.recipie.type = req.body.type
    }
    if (req.body.category != null) {
        res.recipie.category = req.body.category
    }
    if (req.body.title != null) {
        res.recipie.title = req.body.title
    }
    if (req.body.prep_time != null) {
        res.recipie.prep_time = req.body.prep_time
    }
    if (req.body.cook_time != null) {
        res.recipie.cook_time = req.body.cook_time
    }
    if (req.body.ingredients != null) {
        res.recipie.ingredients = req.body.ingredients
    }
    if (req.body.directions != null) {
        res.recipie.directions = req.body.directions
    }
    if (req.body.image_url != null) {
        res.recipie.image_url = req.body.image_url
    }
    if (req.body.comments != null) {
        res.recipie.comments = req.body.comments
    }
    try {
        const updatedRecipie = await res.recipie.save()
        res.json(updatedRecipie)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Deleting One
router.delete("/:id", getRecipie, async (req, res) => {
    try {
        await res.recipie.remove()
        res.json({ message: 'Successfully Removed'})
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
});

async function getRecipie(req, res, next) {
    try {
        recipie = await Recipie.findById(req.params.id)
        if (recipie == null) {
            return res.status(404).json({ message: 'Recipe not found'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.recipie = recipie
    next()
}

module.exports = router;

const router = require('express').Router()
const {Item, User} = require('../db/models')
const ItemPhoto = require('../db/models/itemPhoto')
const {ensureAdmin, ensureAnyLogin, ensureLogin} = require('./middleware')
module.exports = router

// /api/items

router.get('/', async (req, res, next) => {
  try {
    const allItems = await Item.findAll({
      attributes: [
        'id',
        'itemListName',
        'description',
        'itemType',
        'status',
        'dateListed',
        'itemCondition',
        'createdAt', // YF 03.26.21 added - need this data to display "time ago" on item card
      ],
      include: [
        {
          model: User,
          attributes: [
            'id',
            'firstName',
            'latitude',
            'longitude',
            'state',
            'city',
            'createdAt',
          ],
        },
        {
          model: ItemPhoto,
          attributes: ['photoTitle', 'cloudREF', 'downloadURL'],
        },
      ],
    })
    res.json(allItems)
  } catch (err) {
    next(err)
  }
})

// GET single item
// this may be necessary to re-route the user after they create a new post
router.get('/:itemId', async (req, res, next) => {
  const {itemId} = req.params
  try {
    const item = await Item.findByPk(itemId)
    res.json(item)
  } catch (err) {
    next(err)
  }
})

// api/items
// POST a new item
// yf 3.29.21  new item form upload.  Populate item in the item table first, then save its associated photos in itemPhoto table.
router.post('/', ensureAnyLogin, async (req, res, next) => {
  try {
    const {
      itemListName,
      description,
      itemType,
      itemCondition,
      deliveryOption,
      userId,
      imageArr,
      // dateListed,
    } = req.body
    console.log('hello', 'in post req.body', req.body)
    const newItem = await Item.create({
      itemListName,
      description,
      itemType,
      itemCondition,
      deliveryOption,
      userId,
    })

    // yf 3.29.21  if not image, assign default image.  Else update itemPhoto table with firebase storage info.

    if (imageArr.length === 0) {
      const itemPhotos = await ItemPhoto.create({
        photoTitle: 'default.jpg',
      })

      await itemPhotos.setItem(newItem)
    } else {
      imageArr.forEach(async (element) => {
        console.log(element)

        const itemPhotos = await ItemPhoto.create({
          photoTitle: element.photoTitle,
          cloudREF: element.cloudRef,
          downloadURL: element.downloadUrl,
        })

        await itemPhotos.setItem(newItem)
      })
    }
    res.status(201).send(newItem)
  } catch (err) {
    next(err)
  }
})
// /api/users/:userId/items/:itemId
// PUT route for /api/items/:itemId
router.put('/:itemId', ensureLogin, async (req, res, next) => {
  try {
    console.log(
      'in put route for single item req.params',
      req.params,
      'req.body',
      req.body
    )
    const {itemId} = req.params
    const {
      itemType,
      itemListName,
      description,
      itemCondition,
      status,
    } = req.body
    // eager load User and ItemPhoto to match GET route for /items
    // otherwise difficult to get editing to work without convoluted logic or refresh -- JC 3.29.21
    const item = await Item.findByPk(itemId, {
      attributes: [
        'id',
        'itemListName',
        'description',
        'itemType',
        'status',
        'dateListed',
        'itemCondition',
        'createdAt',
      ],
      include: [
        {
          model: User,
          attributes: [
            'id',
            'firstName',
            'latitude',
            'longitude',
            'state',
            'city',
            'createdAt',
          ],
        },
        {
          model: ItemPhoto,
          attributes: ['photoTitle', 'cloudREF', 'downloadURL'],
        },
      ],
    })

    // if item.user.id !== req.user.id

    if (!item) {
      res.sendStatus(404)
      return
    }

    await item.update({
      itemType,
      itemListName,
      description,
      itemCondition,
      status,
    })
    // console.log(
    //   'in PUT route for /item/:itemId after await item.update',
    //   'hello',
    //   'item:',
    //   item
    // )
    res.json(item)
  } catch (err) {
    next(err)
  }
})

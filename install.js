import express from 'express';
const router = express.Router();
import bcrypt from 'bcryptjs';
import Category from './models/Category.js';
import Product from './models/Product.js';
import Role from './models/Role.js';
import User from './models/User.js';
import Article from './models/Article.js';
import Order from './models/Order.js';
import pkg from 'sequelize';
const { Sequelize } = pkg;

/**
 * @route /install install application
 * @todo : create database too.
 */
router.get('/install', async (req, res) => {
  try {
    console.log(process);

    const sequelize = new Sequelize(
      '',
      process.env.DB_USERNAME,
      process.env.DB_PASSWD,
      {
        host: process.env.DB_HOST,
        dialect: process.env.DB_ENV,
        logging: false,
      }
    );
    await sequelize.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME};`);
    await sequelize.query(`CREATE DATABASE ${process.env.DB_NAME}`);
    let category = {};
    let role = {};

    const instances = [
      Category(),
      Product(),
      Role(),
      User(),
      Article(),
      Order(),
    ];

    const rolesToCreate = [
      process.env.BASIC_ROLE,
      process.env.CUSTOMER,
      process.env.ADMIN,
    ];

    for (let instance of instances) {
      await instance.sync();

      if (instance.name === 'Role') {
        for (let role of rolesToCreate) {
          await instance.create({
            name: role,
          });
        }

        role = await instance.findOne({
          where: {
            name: 'admin',
          },
        });
      }

      if (instance.name === 'User') {
        let passwd = 'admin';
        const user = instance.build({
          email: 'admin@admin.com',
          password: passwd,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(passwd, salt);

        user.role_id = role.id;

        await user.save();
      }

      if (instance.name === 'Category') {
        category = await instance.create({
          name: 'Laptop',
        });
      }

      if (instance.name === 'Product') {
        await instance.create({
          category_id: category.id,
          title: 'Title',
          description: 'desciption',
          metaDescription: 'meta description',
          priceHT: 10000,
          image: 'https://www.fillmurray.com/g/300/200',
        });
      }
    }

    res
      .status(200)
      .send(
        `<p>Installation réussie, vous pouvez effacer le fichier install.js</p>`
      );
  } catch (e) {
    res.status(500).send(
      `
      <div>
        <div>${e.message}</div>
        <div>${e}</div>
      </div> 
      `
    );
  }
});

export default router;

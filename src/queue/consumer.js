require('dotenv').config();
const amqp = require('amqplib');
const { leadsService } = require('../services/postgre');
const Listener = require('./Listener');

const consumer = async () => {
  const listener = new Listener(leadsService);

  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue('email-queue', {
    durable: true,
  });

  channel.consume('email-queue', listener.listen, {
    noAck: true,
  });
};

module.exports = consumer;
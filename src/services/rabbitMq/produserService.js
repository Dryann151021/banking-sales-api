const amqp = require('amqplib');

const producerService = {
  sendMessage: async (queue, message) => {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, { durable: true });
    await channel.sendToQueue(queue, Buffer.from(message));
    
    setTimeout(() => {
      connection.close();
    }, 1000);
  },
};

module.exports = producerService;
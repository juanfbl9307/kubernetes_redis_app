import redis from 'redis';
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_HOST = process.env.REDIS_HOST;

export async function connectRedis(port,host) {
  //create a new redis client
  const client = redis.createClient({url: `redis://${REDIS_HOST}:${REDIS_PORT}`})
  await client.connect();
  return client;
}

export default {
    connectRedis
}




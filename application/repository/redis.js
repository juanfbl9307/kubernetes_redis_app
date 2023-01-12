import redis from 'redis';
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_HOST = process.env.REDIS_HOST;
//create a new redis client
export async function connectRedis() {
  const client = redis.createClient({url: `redis://${REDIS_HOST}:${REDIS_PORT}`})
  await client.connect();
  return client;
}

export default {
    connectRedis
}




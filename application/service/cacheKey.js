import repository from '../repository/redis.js';
const client = await repository.connectRedis();

//set a key value pair in redis
async function set(key, value) {
    return await client.set(key, value, function(err, reply) {
        if (err) {
            return err;
        }
        return "Key-value set successfully";
    });
}

//get the value of a key in redis
async function get(key) {
    return client.get(key, function(err, reply) {
        if (err) {
            return err;
        }
        return reply;
    });

}
//delete a key in redis
async function del(key) {
    return await client.del(key, function(err, reply) {
        if (err) {
            return err;
        }
        return "key deleted";
    });
}

export default {
    set,
    get,
    del
}






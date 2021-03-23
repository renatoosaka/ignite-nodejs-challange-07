import { createConnection, getConnectionOptions } from 'typeorm';

export default async (name = 'default') => {
  const ormConfigOptions = await getConnectionOptions();

  return createConnection(Object.assign(ormConfigOptions, {
    name,
    database:
      process.env.NODE_ENV === 'test'
        ? 'ignite_query_challenge_TEST'
        : ormConfigOptions.database,
  }));
};

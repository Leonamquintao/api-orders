const usersTableName = 'users';

exports.seed = function(knex) {
  return knex(usersTableName).del().then(function () {
    return knex(usersTableName).insert([
      { 
        id: '7fc3e55c-56de-43d3-9b3f-222eb4255ded',
        full_name: 'Leonam Quintão',
        email: 'leonamquintao@mail.com',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      { 
        id: '9b5d308e-3fed-4685-a666-cb233050087f',
        full_name: 'Dayana Ribeiro',
        email: 'ribeirodayana3@mail.com',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      { 
        id: 'b1782361-4e2a-47f7-b09e-bb4c616683c2',
        full_name: 'Leticia Quintão',
        email: 'letiquin2016@mail.com',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      { 
        id: 'af5857a7-a27f-47f0-8746-850d73ca6b4b',
        full_name: 'Chayene Ribeiro',
        email: 'flutterchay@mail.com',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      { 
        id: 'c4221684-909c-4839-946e-6171d11d9e7a',
        full_name: 'Charles Ribeiro',
        email: 'charlinrib2021@mail.com',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      { 
        id: 'dca9868c-a485-4c0b-926a-bb117ae01c3a',
        full_name: 'Romário Couto',
        email: 'romcoutokyte@mail.com',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      
    ]);
  });
};

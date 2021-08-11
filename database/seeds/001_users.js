const usersTableName = 'users';

exports.seed = function(knex) {
  return knex(usersTableName).del().then(function () {
    return knex(usersTableName).insert([
      { 
        id: '7fc3e55c-56de-43d3-9b3f-222eb4255ded',
        full_name: 'LEONAM QUINTÃO',
        email: 'leonamquintao@mail.com',
        document: '14534221703',
        birth_date: '01/10/1983',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e', //abc123
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      { 
        id: '9b5d308e-3fed-4685-a666-cb233050087f',
        full_name: 'DAYANA RIBEIRO',
        email: 'ribeirodayana3@mail.com',
        document: '13574761759',
        birth_date: '01/01/1986',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      { 
        id: 'b1782361-4e2a-47f7-b09e-bb4c616683c2',
        full_name: 'LETICIA QUINTÃO',
        email: 'letiquin2016@mail.com',
        document: '42029094706',
        birth_date: '01/01/2016',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      { 
        id: 'af5857a7-a27f-47f0-8746-850d73ca6b4b',
        full_name: 'CHAYENE RIBEIRO',
        email: 'flutterchay@mail.com',
        document: '28833736717',
        birth_date: '06/08/1988',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      { 
        id: 'c4221684-909c-4839-946e-6171d11d9e7a',
        full_name: 'CHARLES RIBEIRO',
        email: 'charlinrib2021@mail.com',
        document: '19319804702',
        birth_date: '01/12/1989',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      },
      { 
        id: 'dca9868c-a485-4c0b-926a-bb117ae01c3a',
        full_name: 'MARCI PAIXÃO',
        email: 'paxmarcifarmae@mail.com',
        document: '34481440708',
        birth_date: '12/02/1983',
        password: '$2a$10$rdP4elUpJGQoiW3Kf3W2HufCPB78KaMRxJljEFehfCOBfV5bV2A8e',
        token: null,
        created_at: new Date(),
        updated_at: null
      }
    ]);
  });
};

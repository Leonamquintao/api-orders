'use strict'

async function getUser(request, response) {
  try {
    // const user = await Database.getUserInstace(request.params.id)
    return  response.status(200).send({
      status: 200,
      data: [
        { 
          id: 'f8ac777a-4663-4131-9627-1b75d3a19278',
          name: 'Leonam Rodrigo',
          email: 'leonam@mail.com',
          birth_date: new Date('11/10/1983'),
          document: '09745592212'
        }
      ]
    })

  } catch (err) {

  }
}

module.exports = getUser
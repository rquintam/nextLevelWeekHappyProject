const Database = require('./db');
const saveInstitution = require('./saveInstitution');

Database.then(async db => {
  // INSERT DATA
  await saveInstitution(db, {
    lat: '-21.1750338',
    lng: '-47.8268736',
    name: 'Lar das meninoddds',
    about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
    whatsapp: '(12) 3-4567-8901',
    images: [
      'https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',
      'https://images.unsplash.com/photo-1502802729233-6bc93ca7ad71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1510025369388-f613ec4bc10b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1500471929063-235c721eedf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
      'https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      'https://images.unsplash.com/photo-1534982841079-afde227ada8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    ].toString(),
    instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
    opening_hour: 'Horário de visitas Das 18h até 8h',
    open_on_weekends: '0'
  })

  // QUERY DATA
  const selectedinstitutions = await db.all('SELECT * FROM institutions')
  console.log(selectedinstitutions)

  // DELETE FROM TABLE
  //await db.run("DELETE FROM institutions WHERE id = '1'") 
})
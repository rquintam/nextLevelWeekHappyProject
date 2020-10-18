const Database = require('./database/db');
const saveInstitution = require('./database/saveInstitution');

module.exports = {
  
  index(req, res){
    return res.render('index')
  },

  async institution(req, res) {
    const id = req.query.id

    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM institutions WHERE id = "${id}"`)
      const institution = results[0]

      institution.images = institution.images.split(',')
      institution.firstImage = institution.images[0]
      institution.open_on_weekends = institution.open_on_weekends == '0' ? false : true

      return res.render('institution', { institution })

    } catch (error) { 
      console.log(error)
      return res.send('Erro no banco de dados!')
    }

    
  },

  async institutions(req, res) {
    try {
      const db = await Database;
      const institutions = await db.all('SELECT * FROM institutions')
      return res.render('institutions', { institutions })
    } catch (error) {
      console.log(error)
      return res.send('Erro no banco de dados!')
    }
  },

  createinstitution(req, res) {
    return res.render('create-institution')
  },

  async saveInstitution(req, res) {
    //console.log(req.body)
    const fields = req.body

    // CHECK ALL FIELDS
    if(Object.values(fields).includes('')){
      return res.send('Todos os campos devem ser preenchidos')
    }

    try {
      // SAVE institution
      const db = await Database
      await saveInstitution(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hour: fields.opening_hour,
        open_on_weekends: fields.open_on_weekends,
      })
      
      const institutionId = await db.all('SELECT id FROM institutions ORDER BY id DESC LIMIT 1')
      // REDIRECT
      return res.redirect(`/institution?id=${institutionId[0].id}`)
    } catch (error) {
      console.log(error)
      return res.send('Erro no banco de dados')
    }
  }

}
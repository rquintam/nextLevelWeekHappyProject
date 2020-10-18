function saveInstitution(
  db,
  {
    lat,
    lng,
    name,
    about,
    whatsapp,
    images,
    instructions,
    opening_hour,
    open_on_weekends,
  }
) {
  return db.run(`
  INSERT INTO institutions (
    lat, 
    lng,
    name,
    about,
    whatsapp,
    images,
    instructions,
    opening_hour,
    open_on_weekends
  ) VALUES (
    "${lat}", 
    "${lng}",
    "${name}",
    "${about}",
    "${whatsapp}",
    "${images}",
    "${instructions}",
    "${opening_hour}",
    "${open_on_weekends}"
  );
`);
}

module.exports = saveInstitution;

const knex = require("../db/connection");

function list(date) {
  if (date) {
    return knex("reservations")
      .where({ reservation_date: date })
      .orderBy("reservation_time");
  }
  
  return knex("reservations").orderBy("reservation_time");
}

function create(reservation) {
  return knex("reservations")
    .insert(reservation)
    .returning("*")
    .then((reservation) => reservation[0]);
}

function read(reservation_id) {
  return knex("reservations")
    .where({ reservation_id})
    .first()
}

module.exports = {
  list,
  create,
  read
};

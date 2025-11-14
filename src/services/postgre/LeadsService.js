const { nanoid } = require('nanoid');
const { Pool } = require('pg');
const InvariantError = require('../../exceptions/InvariantError');
const { leadsToModel, listLeadToModel } = require('../../utils/mapDBToModel');
const NotFoundError = require('../../exceptions/NotFoundError');

class LeadsService {
  constructor() {
    this._pool = new Pool();
  }

  async addLead(leadData) {
    const id = `lead-${nanoid(8)}`;
    const createdAt = new Date().toISOString();

    const {
      name,
      email,
      phone,
      age,
      job,
      marital,
      education,
      defaultCredit,
      housing,
      loan,
      balance,
      contact,
      month,
      dayOfWeek,
      duration,
      campaign,
      pdays,
      previous,
      poutcome,
      empVarRate,
      consPriceIdx,
      consConfIdx,
      euribor3m,
      nrEmployed,
      probabilityScore,
      predictionResult,
      category,
      status = 'new',
    } = leadData;

    const query = {
      text: `INSERT INTO leads (
        id, name, email, phone, age, job, marital, education,
        "default", housing, loan, balance, contact, month, day_of_week,
        duration, campaign, pdays, previous, poutcome,
        emp_var_rate, cons_price_idx, cons_conf_idx, euribor3m, nr_employed,
        probability_score, prediction_result, category, status,
        created_at
      ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30) 
      RETURNING id`,
      values: [
        id,
        name,
        email,
        phone,
        age,
        job,
        marital,
        education,
        defaultCredit,
        housing,
        loan,
        balance,
        contact,
        month,
        dayOfWeek,
        duration,
        campaign,
        pdays,
        previous,
        poutcome,
        empVarRate,
        consPriceIdx,
        consConfIdx,
        euribor3m,
        nrEmployed,
        probabilityScore,
        predictionResult,
        category,
        status,
        createdAt,
      ],
    };

    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new InvariantError('Nasabah gagal ditambahkan');
    }

    return result.rows[0].id;
  }

  async getAllLeads() {
    const result = await this._pool.query(
      'SELECT name, email, age, job, probability_score, category, status  FROM leads'
    );
    return result.rows.map(listLeadToModel);
  }

  async getLeadsDetail(id) {
    const query = {
      text: 'SELECT * FROM leads WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('Nasabah gagal ditampilkan. Id tidak ditemukan');
    }

    return leadsToModel(result.rows[0]);
  }
}

module.exports = LeadsService;

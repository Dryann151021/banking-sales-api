exports.up = (pgm) => {
  pgm.createTable('lead_histories', {
    id: {
      type: 'VARCHAR(30)',
      primaryKey: true,
    },
    lead_id: {
      type: 'VARCHAR(30)',
      notNull: true,
    },
    user_id: {
      type: 'VARCHAR(30)',
      notNull: true,
    },
    action: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    details: {
      type: 'TEXT',
      notNull: true,
    },
    created_at: {
      type: 'TIMESTAMP',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.addConstraint(
    'lead_histories',
    'fk_lead_histories_lead_id',
    'FOREIGN KEY(lead_id) REFERENCES leads(id) ON DELETE CASCADE'
  );

  pgm.addConstraint(
    'lead_histories',
    'fk_lead_histories_user_id',
    'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE'
  );

  pgm.createIndex('lead_histories', 'lead_id');
  pgm.createIndex('lead_histories', 'user_id');
};

exports.down = (pgm) => {
  pgm.dropTable('lead_histories');
};

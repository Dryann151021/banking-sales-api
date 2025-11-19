export const up = (pgm) => {
  pgm.createTable('notes', {
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
    body: {
      type: 'TEXT',
      notNull: true,
    },
    created_at: {
      type: 'TIMESTAMP',
      notNull: true,
    },
  });

  pgm.addConstraint(
    'notes',
    'fk_notes_lead_id',
    'FOREIGN KEY(lead_id) REFERENCES leads(id) ON DELETE CASCADE'
  );

  pgm.addConstraint(
    'notes',
    'fk_notes_user_id',
    'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE'
  );

  pgm.createIndex('notes', 'lead_id');
  pgm.createIndex('notes', 'user_id');
};

export const down = (pgm) => {
  pgm.dropTable('notes');
};

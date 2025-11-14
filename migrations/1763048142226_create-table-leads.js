export const up = (pgm) => {
  pgm.createTable('leads', {
    id: {
      type: 'VARCHAR(30)',
      primaryKey: true,
    },
    name: {
      type: 'VARCHAR(80)',
      notNull: true,
    },
    email: {
      type: 'VARCHAR(80)',
      notNull: true,
    },
    phone: {
      type: 'VARCHAR(20)',
      notNull: true,
    },

    // Dari Dataset
    age: {
      type: 'INTEGER',
      notNull: true,
      default: 0,
    },
    job: {
      type: 'VARCHAR(50)',
      default: 'unknown',
    },
    marital: {
      type: 'VARCHAR(20)',
      default: 'unknown',
    },
    education: {
      type: 'VARCHAR(50)',
      default: 'unknown',
    },
    default: {
      type: 'VARCHAR(10)',
    },
    housing: {
      type: 'VARCHAR(10)',
    },
    loan: {
      type: 'VARCHAR(10)',
    },
    balance: {
      type: 'DECIMAL(15, 2)',
    },
    contact: {
      type: 'VARCHAR(20)',
    },
    month: {
      type: 'VARCHAR(10)',
    },
    day_of_week: {
      type: 'VARCHAR(10)',
    },
    duration: {
      type: 'INTEGER',
    },
    campaign: {
      type: 'INTEGER',
    },
    pdays: {
      type: 'INTEGER',
    },
    previous: {
      type: 'INTEGER',
    },
    poutcome: {
      type: 'VARCHAR(20)',
    },

    emp_var_rate: {
      type: 'DECIMAL(5,2)',
    },
    cons_price_idx: {
      type: 'DECIMAL(6,3)',
    },
    cons_conf_idx: {
      type: 'DECIMAL(5,2)',
    },
    euribor3m: {
      type: 'DECIMAL(6,3)',
    },
    nr_employed: {
      type: 'DECIMAL(8,1)',
    },
    probability_score: {
      type: 'DECIMAL(5,2)',
    },
    prediction_result: {
      type: 'VARCHAR(10)',
    },
    category: {
      type: 'VARCHAR(20)',
    },

    // Portal
    status: {
      type: 'VARCHAR(20)',
      notNull: true,
      default: 'new',
    },
    assigned_to: {
      type: 'VARCHAR(30)',
    },
    last_contacted_at: {
      type: 'VARCHAR(30)',
    },
    created_at: {
      type: 'VARCHAR(30)',
      notNull: true,
    },
  });

  const createdAt = new Date().toISOString();
  pgm.sql(`INSERT INTO leads (
    id, name, email, phone, age, job, marital, education,
    "default", housing, loan, balance, contact, month, day_of_week,
    duration, campaign, pdays, previous, poutcome,
    emp_var_rate, cons_price_idx, cons_conf_idx, euribor3m, nr_employed,
    probability_score, prediction_result, category, status, created_at
    ) VALUES
    ('lead-123001', 'Sukma Suciati', 'sukmasuci@email.com', '+62 812-1111-1111',
      21, 'student', 'single', 'university.degree',
      'no', 'no', 'no', 45000000, 'telephone', 'jun', 'wed',
      95, 2, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      65, 'no', 'medium', 'new', '${createdAt}'
    ),
    ('lead-123002', 'Raniah Maritza', 'RaniahMaritza@email.com', '+62 812-2222-2222',
      20, 'student', 'single', 'university.degree',
      'no', 'yes', 'no', 180000000, 'cellular', 'jul', 'thu',
      320, 1, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      91, 'yes', 'high', 'new', '${createdAt}'
    ),
    ('lead-123003', 'Adriyan', 'adriyan@email.com', '+62 812-3333-3333',
      20, 'student', 'divorced', 'university.degree',
      'unknown', 'no', 'yes', 62000000, 'cellular', 'may', 'fri',
      142, 3, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      58, 'no', 'low', 'rejected', '${createdAt}'
    ),
    ('lead-123004', 'Devi', 'devi@email.com', '+62 812-4444-5555',
      20, 'blue-collar', 'married', 'basic.6y',
      'no', 'no', 'no', 55000000, 'telephone', 'apr', 'mon',
      88, 2, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      54, 'no', 'low', 'contacted', '${createdAt}'
    ),
    ('lead-123005', 'Linda Putriani', 'linda.putriani@email.com', '+62 812-5555-5555',
      18, 'student', 'married', 'university.degree',
      'no', 'yes', 'no', 165000000, 'cellular', 'may', 'tue',
      275, 1, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      88, 'yes', 'high', 'follow-up', '${createdAt}'
    ),
    ('lead-123006', 'Siti Nurhaliza', 'siti.n@email.com', '+62 812-6666-6666',
      45, 'management', 'married', 'university.degree',
      'no', 'no', 'no', 125000000, 'cellular', 'may', 'mon',
      261, 1, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      92, 'yes', 'high', 'new', '${createdAt}'
    ),
    ('lead-123007', 'Bambang Wijaya', 'bambang.w@email.com', '+62 812-7777-7777',
      52, 'entrepreneur', 'married', 'university.degree',
      'no', 'no', 'no', 150000000, 'cellular', 'may', 'mon',
      149, 1, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      89, 'yes', 'high', 'contacted', '${createdAt}'
    ),
    ('lead-123008', 'Dewi Lestari', 'dewi.l@email.com', '+62 812-8888-8888',
      48, 'management', 'married', 'university.degree',
      'no', 'yes', 'no', 110000000, 'cellular', 'may', 'mon',
      226, 1, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      87, 'yes', 'high', 'follow-up', '${createdAt}'
    ),
    ('lead-123009', 'Andi Pratama', 'andi.p@email.com', '+62 812-9999-9999',
      38, 'technician', 'single', 'high.school',
      'no', 'no', 'no', 85000000, 'telephone', 'may', 'mon',
      151, 1, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      84, 'yes', 'high', 'new', '${createdAt}'
    ),
    ('lead-123010', 'Rina Hartono', 'rina.h@email.com', '+62 813-1010-1010',
      42, 'admin.', 'married', 'high.school',
      'no', 'no', 'no', 95000000, 'cellular', 'may', 'mon',
      180, 1, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      78, 'yes', 'medium', 'contacted', '${createdAt}'
    ),
    ('lead-123011', 'Fajar Ismail', 'fajar.i@email.com', '+62 813-1111-1111',
      35, 'services', 'single', 'high.school',
      'unknown', 'no', 'no', 70000000, 'telephone', 'may', 'mon',
      120, 1, 999, 0, 'nonexistent',
      1.1, 93.994, -36.4, 4.857, 5191,
      72, 'yes', 'medium', 'new', '${createdAt}'
    )
  `);

  pgm.createIndex('leads', 'email');
  pgm.createIndex('leads', 'age');
  pgm.createIndex('leads', 'job');
  pgm.createIndex('leads', 'probability_score');
  pgm.createIndex('leads', 'category');
  pgm.createIndex('leads', 'status');
  pgm.createIndex('leads', 'assigned_to');
};

export const down = (pgm) => {
  pgm.dropTable('leads');
};

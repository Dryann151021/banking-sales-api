// Import database
const pool = require('../../config/database');

// Import service
const UsersService = require('./UsersService');
const AuthenticationsService = require('./AuthenticationsService');
const LeadsService = require('./LeadsService');
const DashboardService = require('./DashboardService');
const NotesService = require('./NotesService');

// Singleton instance
const usersService = new UsersService(pool);
const authenticationsService = new AuthenticationsService(pool);
const leadsService = new LeadsService(pool);
const dashboardService = new DashboardService(pool);
const notesService = new NotesService(pool);

module.exports = {
  usersService,
  authenticationsService,
  leadsService,
  dashboardService,
  notesService,
};

const asyncHandler = require('../../utils/asyncHandler');
const { postValidatePayload } = require('./validator');
const LeadsService = require('../../services/postgre/LeadsService');
const leadsService = new LeadsService();

const postLeadController = asyncHandler(async (req, res) => {
  postValidatePayload(req.body);

  const leadId = await leadsService.addLead(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Nasabah berhasil ditambahkan',
    data: {
      leadId,
    },
  });
});

const getAllLeads = asyncHandler(async (req, res) => {
  const leads = await leadsService.getAllLeads();
  res.status(200).json({
    status: 'success',
    data: {
      leads,
    },
  });
});

const getLeadDetail = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const lead = await leadsService.getLeadsDetail(id);
  res.status(200).json({
    status: 'success',
    data: {
      lead,
    },
  });
});

module.exports = { postLeadController, getAllLeads, getLeadDetail };

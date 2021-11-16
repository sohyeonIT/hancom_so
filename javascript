@api.model
def default_sequence(self):
   _logger.warning("sequence%s"%self.env['ir.sequence'].next_by_code('gvm.delivery'))
   return  self.env['ir.sequence'].next_by_code('gvm.delivery')
@api.model
def create(self, vals):
     if vals.get('de_num','New') == 'New':
         vals['de_num'] = self.env['ir.sequence'].next_by_code('gvm.delivery') or '/'
     res = super(GvmDelivery, self).create(vals)
     self.write({'state': 'send_ready'})
     return res

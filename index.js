import { resolve } from 'path';


export default function (kibana) {
  return new kibana.Plugin({
    require: ['kibana'],
    name: 'patient-nav',
    uiExports: {
      fieldFormats: ['plugins/patient-nav/p-nav'],
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },



  });
}
